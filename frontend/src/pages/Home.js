import React from 'react';
import styled from 'styled-components'
import { useParams } from "react-router";
import { Container } from '@mantine/core';

export const Home = () => {
    return <flex>
        <Container>
            <text>
                A long time ago, in a metaverse far far away... Decentralized cryptofunding was climbing its way to the top!
                Here are some great projects waiting to be discovered and backed by you,
                the people of the future.
            </text>
        </Container>
    </flex >;
};

const Text = styled.p`
  color: white;
  padding-left: 24px;
  max-width: 30rem;
  `
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 60px;
  `

Container = styled.div`
  width: 50%;
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
