import React from 'react';
import styled from 'styled-components';
import Paper from '../../Global/Paper/Paper';


const FooterContainer = styled.div`
    width: 100vw;
    height: 75px;
    position: absolute;
    bottom: 0;
`
const FooterPaper = styled(Paper)`
    background-color: #EEEEEE;
    height: 100%;
    width: 100%;
`
export default function Footer({}){
    return(
        <FooterContainer>
            <FooterPaper>

            </FooterPaper>
        </FooterContainer>
    )
}