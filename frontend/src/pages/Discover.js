import React from 'react';
import {FundraiserCard} from '../components/FundraiserCard';
import "../css/discover.css"

export const Discover = () => {
    const gallery = [
        {
            "name": "star",
            "description": "star wars",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill"
        },
        {
            "name": "wars",
            "description": "war",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill"
        },
        {
            "name": "da vinky",
            "description": ":)",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill"
        },
        {
            "name": "star2",
            "description": "star wars",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill"
        },
        {
            "name": "wars2",
            "description": "war",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill"
        },
        {
            "name": "da vinky2",
            "description": ":)",
            "image": "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill"
        }]


    return (
        <div className={"flex-center"}>
            <div id="gallery">
                {gallery.map((campaign) =>
                    <FundraiserCard name={campaign.name} description={campaign.description}
                                    image={campaign.image}></FundraiserCard>)}
            </div>
            ;
        </div>
    )
};
