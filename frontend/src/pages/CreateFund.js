/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { Button, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import styled from 'styled-components'
import '../css/createFund.css';
import { useNavigate } from "react-router-dom";
import { convertEthToGWei, createCampaign, getProvider, getSigner, getReadWriteContract} from '../crypto/crypto';

export function CreateFund() {
    const form = useForm({
        initialValues: {
            campaignTitle: "",
            campaignDeadline: "",
            description: "",
            goalAchieve: "",
            keywords: "",
            voteOptions: "",
        }
    });

    const [keywords, setKeywords] = useState([]);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        if (values.campaignTitle === '' || values.description === '' || values.goalAchieve === '' || values.keywords.length === 0 || values.voteOptions === '') {
            alert("Please fill in the required areas")
            return;
        }
        const voteOptions = splitString(values.voteOptions, 4);
        const newFormData = {
            "voteOptionsAmount": voteOptions.length,
            "title": values.campaignTitle,
            "description": values.description,
            "goalInGWei": values.goalAchieve,
            "keywords": splitString(values.keywords, 10),
            "endDateTime": values.campaignDeadline, // TOO-DO: convert to UTC unix timestamp
            "picURL": values.image,
            "vote": voteOptions
        }

        setFormData(newFormData);

        console.log(newFormData);

        getProvider().then((prov) => {
            getSigner(prov).then((s) => {
                let contRW = getReadWriteContract(s);
                let d = {voteOptionsAmount: voteOptions.length, title: values.campaignTitle, description: values.description, goalInGWei: convertEthToGWei(values.goalAchieve), currentFundingInGWei: 0, keywords: newFormData.keywords, endDateTime: Math.floor(new Date(values.campaignDeadline).getTime() / 1000), picURL: values.image, creator: "0x0000000000000000000000000000000000000000"};
                createCampaign(contRW, voteOptions.map((v) => {return {title: v, votes: 0}}), d).then(() => {navigate("/discover");})
            });
        });
    }

    function splitString(voteOptions, maxAmount) {
        return voteOptions.split(",", maxAmount);
    }

    return (
        <Flex>
            <Form onSubmit={form.onSubmit((values) => {
                handleSubmit(values)
            })}>
                <TextInput
                    required
                    label="Campaign Title"
                    placeholder="Your Campaign Title"

                    {...form.getInputProps('campaignTitle')}
                />
                <TextInput
                    required
                    label="Campaign Deadline"
                    input type="datetime-local"
                    {...form.getInputProps('campaignDeadline')}
                />
                <Textarea
                    required
                    label="Description"
                    placeholder='Describe your campaign'
                    {...form.getInputProps('description')}
                />
                <TextInput
                    required
                    label="Goal to Achieve"
                    placeholder='0.00000000 ETH'
                    {...form.getInputProps('goalAchieve')}
                />
                <TextInput
                    required
                    label="Image URL"
                    placeholder='www.image.com'
                    {...form.getInputProps('image')}
                />
                <Textarea
                    required
                    label="Keywords"
                    placeholder='Input keywords that represent your campaign. (seperate each entry by a comma.)'
                    autosize
                    minRows={2}
                    maxRows={4}
                    {...form.getInputProps('keywords')}
                />
                <Textarea
                    required
                    label="Vote Options"
                    placeholder='Input candidates here. (seperate each entry by a comma.)'
                    autosize
                    minRows={2}
                    maxRows={4}
                    {...form.getInputProps('voteOptions')}
                />
                <CButton
                    type="submit">Submit</CButton>
            </Form>
        </Flex>
    );
}

const CButton = styled(Button)`
  background-color: black;
  opacity: 0.8;
  margin-top: 12px;
  &:hover {
  background-color: black;
  color: #FFE81F;
  }
`

const Flex = styled.div`
display: flex;
    justify-content: center;
    width: 100vw;
`
const Form = styled.form`
  background-color: #FFE81F;
    opacity: 0.85;
    align-self: center;
    margin: 20px;
    padding: 20px;
    margin-top: 10%;
    border-radius: 6px;
    width: 60%;
    min-height: 30rem;
    @media (max-width: 500px) {
    width: 80%;
    }
`