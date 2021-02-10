import React from 'react';
import styled from 'styled-components';

const StyledPaper = styled.div`
    height: auto;
    width: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin: 15px;
    box-shadow: 3px 3px 3px 3px #00000032;
    border: 1px solid #00000050;
    background-color: #ffffff;
`

export default function Paper({children, className, style}){
    return(
        <StyledPaper className={className} style={style}>
            {children}
        </StyledPaper>
    )
}