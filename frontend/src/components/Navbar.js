import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi"
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";
import styled from 'styled-components'

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
            <Icons padding={20} onClick={() => handleBurgerOpen()}><GiHamburgerMenu size={22}></GiHamburgerMenu></Icons>
        </div>
    }
    return <Nav>
        <NavHeader>
            <Icons onClick={() => handleBurgerClose()}><GiHamburgerMenu size={22}></GiHamburgerMenu></Icons>
            <Icons onClick={() => handleChange("")} style={props.selectedTab === "" ? { color: "#FFE81F" } : { color: 'white' }}><AiFillHome size={22}></AiFillHome></Icons>
            <Invis ><AiFillHome size={22}></AiFillHome></Invis>
        </NavHeader>
        <NavFeatures>
            <NavButton onClick={() => handleChange("createFundraiser")} style={props.selectedTab === "createFundraiser" ? { color: "#FFE81F" } : { color: 'white' }}>Create Fundraiser</NavButton>
            <NavButton onClick={() => handleChange("discover")} style={props.selectedTab === "discover" ? { color: "#FFE81F" } : { color: 'white' }}>Discover</NavButton>
        </NavFeatures>

        <NavFooter>
            <CustomA href="https://github.com/antpor15/ConUHacks6" >
                <AiFillGithub size={28}></AiFillGithub>
            </CustomA>
            <CustomA href="https://ropsten.etherscan.io/address/0xE08175cB86F4b7E1fD0631F97bb0a59580Bd61A8#code" >
                <FaEthereum size={28}></FaEthereum>
            </CustomA>
        </NavFooter>
    </Nav >
};


const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 94%;
    width: 300px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #000000;
    overflow-x: hidden;
    transition: 0.5s;
    //padding-top: 1%;
    padding-bottom: 60px;
    @media (max-width: 400px) {
        width: 100vw;
        opacity: 0.9;
    }
`

const NavHeader = styled.div`
 display: flex;
    justify-content: space-between;
`

const NavFeatures = styled.div`
display: flex;
    flex-direction: column;
`

const NavFooter = styled.div`
display:flex;
    margin-top: auto;
    justify-content: center;
    padding-bottom: 30px;
    gap: 5%;
`

const Icons = styled.button`
    padding: ${props => props.padding ? props.padding : 20}px;
    color: white;
    background: transparent;
    border-width: 0px;
    &:hover {
    color: #FFE81F;
    }
`

const CustomA = styled.a`
color: white;
    background: black;
    border-width: 0px;
    &:hover {
    color: #FFE81F;
    }
`

const Invis = styled.button`
    visibility: hidden;
`

const NavButton = styled.button`
color: white;
    background-color:black;
    text-align: left;
    background: transparent;
    border-width:2px;
    border-color:transparent;
    padding:8%;
    
    &:hover {
    border-width:2px;
    border-color:#FFE81F;
    color:#FFE81F !important;
    }
`