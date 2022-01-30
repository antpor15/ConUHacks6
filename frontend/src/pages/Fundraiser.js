import React from 'react'
import {useParams} from "react-router";
import '../css/fundraiser.css'

const Fundraiser = () => {
    const route = useParams()

    console.log(route)

    return (
        <div className={"flex-center-fundraiser"}>
            <div className={"fundraiser-container"}>
                <div className={'image'}>
                    <img  height={300}
                         src={"https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill"}/>
                </div>

                <div className={'description'}>

                </div>
            </div>
        </div>
    )
}

export default Fundraiser