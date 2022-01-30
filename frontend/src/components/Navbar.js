import React from 'react';
import "../css/navbar.css";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi"
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";

export const Navbar = (props) => {
    const navigate = useNavigate();

    const handleChange = (route) => {
        navigate(route);
        props.tabChange(route);

    }

    const handleBurgerOpen = () => {
        props.navbarStateChange(true);
    }

    const handleBurgerClose = () => {
        props.navbarStateChange(false);
    }

    if (!props.navbarOpen) {
        return <div style={{ position: 'absolute' }}>
            <button className="icons" onClick={() => handleBurgerOpen()}><GiHamburgerMenu size={22}></GiHamburgerMenu></button>
        </div>
    }
    return <div className="navbar">
        <div id="top-of-nav">
            <button className="icons" onClick={() => handleBurgerClose()}><GiHamburgerMenu size={22}></GiHamburgerMenu></button>
            <button className="icons" onClick={() => handleChange("")} style={props.selectedTab === "" ? { color: "#FFE81F" } : { color: 'white' }}><AiFillHome size={22}></AiFillHome></button>
            <button id="invisible"><AiFillHome size={22}></AiFillHome></button>
        </div>
        <div id="nav-features">
            <button className="nav-button" onClick={() => handleChange("createFundraiser")} style={props.selectedTab === "createFundraiser" ? { color: "#FFE81F" } : { color: 'white' }}>Create Fundraiser</button>
            <button className="nav-button" onClick={() => handleChange("discover")} style={props.selectedTab === "discover" ? { color: "#FFE81F" } : { color: 'white' }}>Discover</button>
        </div>

        <div id="bottom-of-nav">
            <a href="https://github.com/antpor15/ConUHacks6" className="icons" id="github-icon">
                <AiFillGithub size={28}></AiFillGithub>
            </a>
            <a href="https://ropsten.etherscan.io/address/0xE08175cB86F4b7E1fD0631F97bb0a59580Bd61A8#code" className="icons" id="github-icon">
                <FaEthereum size={28}></FaEthereum>
            </a>
        </div>
    </div >
};
