import React from 'react';
import styled from 'styled-components';

const StyledPaper = styled.div`
    display: block;
    padding: 5px;
    border: 1px solid #000000;
`

export default function Paper(props){

    const {
        children
    } = props;
    
    return(
        <StyledPaper>
            {children}
        </StyledPaper>
    )
}