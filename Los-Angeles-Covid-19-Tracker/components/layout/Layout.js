import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { lightGrey } from '../../assets/styles/colors';


export default (props) => {
    return(
        <Layout>
            <Body>
            {props.children}
            </Body>
        </Layout>
    )
}
const Body = styled.div`
min-height: 300px;
height: 100%;
width: 100%;
`

const Layout = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${lightGrey};
    display: flex;
    align-items: center;
`