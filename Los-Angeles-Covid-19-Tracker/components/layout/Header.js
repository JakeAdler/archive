import React, {useState} from 'react';
import Link from "next/link"
import styled from 'styled-components';
import { darkGrey } from '../../assets/styles/colors';
import { FaGithub, FaInstagram } from 'react-icons/fa'
 
export default () => {
    return(
        <Header>
            <Title>Los Angeles County Covid-19 Tracker</Title>
            <SocialBtns>
                <a href='https://github.com/JakeAdler/Los-Angeles-Covid-19-Tracker'>
                    <FaGithub size={30}/>
                </a>
            </SocialBtns>
        </Header>
    )
}

const Header = styled.div`
    position: relative;
    height: auto;
    max-height: 225px;
    width: 100%;
    background-color: ${darkGrey};
    padding: 15px 0px;
    margin: 0px 0px 15px;
`
const Title = styled.h1`
    text-align: center;
    font-size: 2.25rem;
    line-height: 2.75rem;
    @media (max-width: 950px) {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 25px;
    };
`

const SocialBtns = styled.div`
    position: absolute;
    top: 10%;
    right: 10px;
    width: 40px;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 950px) {
        right: calc(50% - 37.5px);
        top: 35px;
    }
    @media (max-width: 586px) {
        top: 60px;
    }
`