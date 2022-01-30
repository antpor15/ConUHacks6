import React, { useState } from 'react';
import { FundraiserCard } from '../components/FundraiserCard';
import { MdFilterList } from 'react-icons/md'
import styled from 'styled-components'
import { Filter } from "../components/Filter"

export const Discover = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [selectedKeywords, setSelectedKeywords] = useState([])

    const keywordsChange = (keywords) => {
        setSelectedKeywords(keywords);
    }
    const gallery = [
        {
            "name": "star",
            "description": "star wars",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill",
            "keywords": ["Education", "Freedom"]
        },
        {
            "name": "wars",
            "description": "war",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill",
            "keywords": ["Freedom"]
        },
        {
            "name": "da vinky",
            "description": ":)",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill",
            "keywords": ["LGBTQ", "Freedom"]
        },
        {
            "name": "star2",
            "description": "star wars",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill",
            "keywords": ["BLM"]
        },
        {
            "name": "wars2",
            "description": "war",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill",
            "keywords": ["Education", "BLM"]
        },
        {
            "name": "da vinky2",
            "description": ":)",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill",
            "keywords": ["Education", "Freedom"]
        }]

    const handleFilterClick = () => {
        setShowFilter(!showFilter)
    }
    return (
        <Flex>
            <FilterIcon onClick={() => handleFilterClick()}><MdFilterList size={25}></MdFilterList></FilterIcon>
            {
                showFilter ? <Filter keywordsChange={keywordsChange} /> : null
            }

            <Flex>
                <Gallery>
                    {gallery.map((campaign) => (selectedKeywords.length === 0 || campaign.keywords.some(keyword => selectedKeywords.includes(keyword))) ?
                        < FundraiserCard campaign={campaign} ></FundraiserCard> : null)}
                </Gallery>
            </Flex>
        </Flex >
    )
};

const Flex = styled.div`
display: flex;
    justify-content: center;
    width: 100vw;
`

const Gallery = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 6%;
    padding-left: 2%;
    padding-right: 2%;
    row-gap: 25px;
    max-width: 60%;
`

const FilterIcon = styled.button`
background-color:transparent;
    border-width:0px;
    color: white;
    display:flex;
    justify-content: flex-end;
    

`
