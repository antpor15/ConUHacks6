import React from 'react';
import "../css/navbar.css";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi"

export const Navbar = () => {
    return <div id="navbar">
        <div>
            <button><AiFillHome></AiFillHome></button>
            <button><GiHamburgerMenu></GiHamburgerMenu></button>
        </div>
        <button>Create Fund</button>
        <button>Discovery</button>
    </div>;
};
