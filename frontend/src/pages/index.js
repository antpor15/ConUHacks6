import React from 'react'
import { Route, Routes } from "react-router";
import { CreateFund } from './CreateFund';

const Router = (props) => {
    return (
        <Routes>
            {/* <Route path="/" exact element={<Home tabChange={props.tabChange} />} /> */}
            <Route path="/createFund" element={<CreateFund/>} />
        </Routes>
    )
}

export default Router