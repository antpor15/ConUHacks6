import React, {useState, useEffect} from 'react'
import {useParams} from "react-router";
import '../css/fundraiser.css'
import styled from 'styled-components'
import { ethers } from "ethers";
import {MultiSelect, Progress, Select, Button} from "@mantine/core";

const Fundraiser = (props) => {
    const route = useParams().id;
    const [progress, setprogress] = useState(0);
    const [voteOptions, setVoteOptions] = useState([]);

    useEffect(() => {
      if (props.campaigns.length === 0) {
        return;
      }

      let p = props.campaigns[route][5]/props.campaigns[route][4]*100;
      setprogress(p > 100 ? 100 : p);

      setVoteOptions(props.campaigns[route][0].map((v) => {
        return v.title;
      }));
    }, [props.campaigns]);


    return props.campaigns.length && (
        <Flex>
            <Container>
                <Image>
                    <img style={{padding: '10%'}} height={250}
                         src={props.campaigns[route][9]}/>
                </Image>
                <Content>
                    <Title>Title:</Title>
                    <Text>{props.campaigns[route][2]}</Text>
                    <Title>Description: </Title>
                    <Text>{props.campaigns[route][3]}</Text>
                    <Title>Amount raised</Title>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        <CProgress value={progress} label={progress+"%"} size="xl" radius="xl"/>
                    </div>
                </Content>
                <Milestones>
                    <Title>
                        Voting
                    </Title>
                    <Text>
                      Choose an option:
                    </Text>
                    <div
                     id='voteGallery'> 
                      <Select
                      label=""
                      placeholder="Pick one:"
                      data={voteOptions}/>
                    </div>
                    {props.campaigns[route][0].map(voteOption => {
                      return <p>{voteOption.title}: {ethers.BigNumber.from(voteOption.votes._hex).toString()}</p>;
                    })}
                </Milestones>
            </Container>
        </Flex>
    )
}

export default Fundraiser

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding-top: 60px;
`

const Container = styled.div`
  width: 80%;
  background-color: #292929;
  opacity: 0.8;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 10px;
  max-width: 1200px;
  margin-bottom: 2rem;
`

const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 300px;
`

const Title = styled.h3`
  color: white;
  padding-left: 12px;
`

const Content = styled.div`
  min-width: 40rem;
  height: 30rem;
  outline: 1px white solid;
  border-radius: 6px;
`

const Milestones = styled.div`
  min-width: 20rem;
  height: 30rem;
  outline: 1px white solid;
  border-radius: 6px;
`

const Text = styled.p`
  color: white;
  padding-left: 24px;
  max-width: 30rem;
`

const CProgress = styled(Progress)`
  width: 80%;
  padding-left: 2rem;
`