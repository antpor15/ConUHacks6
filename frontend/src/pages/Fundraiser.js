import React from 'react'
import {useParams} from "react-router";
import '../css/fundraiser.css'
import styled from 'styled-components'
import {Progress} from "@mantine/core";

const Fundraiser = (fundraiser) => {
    const route = useParams()

    return (
        <Flex>
            <Container>
                <Image>
                    <img style={{padding: '10%'}} height={250}
                         src={"https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill"}/>
                </Image>
                <Content>
                    <Title>Title:</Title>
                    <Text>Big Title</Text>
                    <Title>Description: </Title>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum</Text>
                    <Title>Amount raised</Title>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        <CProgress value={75} label="75%" size="xl" radius="xl"/>
                    </div>
                </Content>
                <Milestones>
                    <Title>
                        Milestones
                    </Title>

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