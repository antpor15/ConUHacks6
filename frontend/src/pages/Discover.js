import React, { useState } from 'react';
import { FundraiserCard } from '../components/FundraiserCard';
import { MdFilterList } from 'react-icons/md'
import styled from 'styled-components'
import { Filter } from "../components/Filter"

export const Discover = (props) => {
    const [showFilter, setShowFilter] = useState(false)
    const [selectedKeywords, setSelectedKeywords] = useState([])

    const keywordsChange = (keywords) => {
        setSelectedKeywords(keywords);
    }

    const gallery = props.campaigns.map((c) => {
        return {
            "name": c[2],
            "description": c[3],
            "image": c[9],
            "keywords": c[6]
        }
    });

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
    position: absolute;
    justify-content: flex-end;
    right: 5px;
    top: 5px;
`
