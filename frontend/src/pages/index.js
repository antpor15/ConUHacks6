import React from 'react'
import { Route, Routes } from "react-router";
import { CreateFund } from './CreateFund';
import { Discover } from './Discover';

const Router = (props) => {
    return (
        <Routes>
            {/* <Route path="/" exact element={<Home tabChange={props.tabChange} />} /> */}
            <Route path="/createFundraiser" element={<CreateFund />} />
            <Route path="/discover" element={<Discover />} />
        </Routes>
    )
}

export default Router