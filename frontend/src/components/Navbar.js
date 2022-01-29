import React from 'react';
import "../css/navbar.css";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi"
import { AiFillGithub } from "react-icons/ai";

export const Navbar = () => {
    return <div id="navbar">
        <div id="top-of-nav">
            <button id="invisible"><AiFillHome size={22}></AiFillHome></button>
            <button className="icons"><AiFillHome size={22}></AiFillHome></button>
            <button className="icons"><GiHamburgerMenu size={22}></GiHamburgerMenu></button>
        </div>
        <div id="nav-features">
            <button className="nav-button">Create Fund</button>
            <button className="nav-button">Discovery</button>
        </div>

        <div id="bottom-of-nav">
            <button className="icons">
                <AiFillGithub size={28}></AiFillGithub>
            </button>
        </div>
    </div>;
};
