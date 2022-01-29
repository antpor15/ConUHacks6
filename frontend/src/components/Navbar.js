import React from 'react';
import "../css/navbar.css";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi"
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Navbar = (props) => {
    const navigate = useNavigate();

    const handleChange = (route) => {
        navigate(route);
        props.tabChange(route);

    }

    return <div id="navbar">
        <div id="top-of-nav">
            <button id="invisible"><AiFillHome size={22}></AiFillHome></button>
            <button className="icons" onClick={() => handleChange("home")} style={props.selectedTab === "home" ? { color: "#FFE81F" } : { color: 'white' }}><AiFillHome size={22}></AiFillHome></button>
            <button className="icons"><GiHamburgerMenu size={22}></GiHamburgerMenu></button>
        </div>
        <div id="nav-features">
            <button className="nav-button" onClick={() => handleChange("create-fund")} style={props.selectedTab === "create-fund" ? { color: "#FFE81F" } : { color: 'white' }}>Create Fundraiser</button>
            <button className="nav-button" onClick={() => handleChange("discovery")} style={props.selectedTab === "discovery" ? { color: "#FFE81F" } : { color: 'white' }}>Discovery</button>
        </div>

        <div id="bottom-of-nav">
            <button className="icons" id="github-icon">
                <AiFillGithub size={28}></AiFillGithub>
            </button>
        </div>
    </div>;
};
