import React from 'react';
import styled from 'styled-components'

export const Home = () => {
  return <Flex>
    <Texth1>Star Funds</Texth1>
    <Container>
      <Text>
        A long time ago, in a metaverse far far away... Decentralized cryptofunding was climbing its way to the top!
        Here are some great projects waiting to be discovered and backed by you,
        the people of the future.
      </Text>
    </Container>
  </Flex>
  return <div></div>
};

const Texth1 = styled.h1`
color: white;
  padding-left: 24px;
  max-width: 30rem;
  font-size:80;
  color: #FFE81F;
`
const Text = styled.h2`
  color: white;
  padding-left: 24px;
  max-width: 30rem;
  font-size:80;
  color: #FFE81F;
  `


const Container = styled.div`

  width: 50%;
  background-color: #292929;
  opacity: 0.8;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 10px;
  max-width: 1200px;
  margin-bottom: 2rem;
  `

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding-top: 60px;
`
