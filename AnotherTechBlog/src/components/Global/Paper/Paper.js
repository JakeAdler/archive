import React from 'react';
import styled from 'styled-components';

const P = styled.div`
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 3px 3px 3px 3px #00000026;
    box-sizing: border-box;
`

export default function Paper({children, className, style}){

    return(
        <P className={className} style={style}>
          {children}  
        </P>
    )
}