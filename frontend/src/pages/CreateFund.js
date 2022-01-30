/* eslint-disable no-restricted-globals */
import React from 'react';
import {Button, Textarea, TextInput} from '@mantine/core';
import {useForm} from '@mantine/hooks';
import styled from 'styled-components'

export function CreateFund() {
    const form = useForm({
        initialValues: {
            campaignTitle: "",
            campaignDeadline: "",
            description: "",
            goalAchieve: "",
            keywords: "",
            voteOptions: "",
        },

        validationRules: {
            email: (value) => /^\S+@\S+$/.test(value),
        },
    });

    const handleSubmit = (values) => {
        console.log(values)
        alert("Please fill in the required areas")
    }

    //always use handlesubmit and parse vote options to have min 2 max 4.

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
                    label="Keywords"
                    placeholder='Input keywords that represent your campaign'
                    {...form.getInputProps('keywords')}
                />
                <Textarea
                    required
                    label="Vote Options"
                    placeholder='Input candidates here. (seperate each entry by a comma; eg:)'
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