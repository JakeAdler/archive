import React from 'react';
import styled from 'styled-components';
import { darkGrey, blue, orange } from '../../assets/styles/colors';
import numberWithCommas from '../../utils/numberWithCommas';

export default ({count, type}) => {
    return( 
        <Counter>
            <Title>Total {type === 'deaths' ? 'Deaths' : 'Cases'}</Title>
            <Count type={type} >{count}</Count>
        </Counter>
    )
}

const Counter = styled.div`
    width: 100%;
    height: auto;
    background-color: ${darkGrey};
    border: 1px solid #000;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
`
const Title = styled.h3`
    font-size: 1.25rem;
`
const Count = styled.h3`
    margin-top: 10px;
    font-size: 1.75rem;
    color: ${props => props.type === 'deaths' ? orange : blue};
`