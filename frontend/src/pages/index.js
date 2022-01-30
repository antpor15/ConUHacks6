import React from 'react'
import { Route, Routes } from "react-router";
import { CreateFund } from './CreateFund';
import { Discover } from './Discover';
import { Home } from './Home'
import Fundraiser from "./Fundraiser";

const Router = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createFundraiser" element={<CreateFund />} />
            <Route path="/fundraiser" element={<Fundraiser/>} />
            <Route path="/discover" element={<Discover />} />
        </Routes>
    )
}

export default Router