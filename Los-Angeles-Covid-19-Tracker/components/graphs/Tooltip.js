import React from 'react';
import styled from 'styled-components';
import numberWithCommas from '../../utils/numberWithCommas';
import { darkGrey } from '../../assets/styles/colors';

export default ({point})=>{
    const { data, color, id } = point;
    const { xFormatted, yFormatted } = data;

    return(
        <ToolTip>
            <Col>
                <Circle c={color}/>  
            </Col>
            <Col>
                <p>Date: {xFormatted}</p>
                <p>{id.split('.')[0]}: {numberWithCommas(yFormatted)}</p>
            </Col>
        </ToolTip>
    )
};

const ToolTip = styled.div`
    width: 135px;
    height: 50px;
    margin-bottom: 10px;
    margin-right: 75px;
    background-color: ${darkGrey};
    display: flex;
    justify-content: space-around;
    border: 1px solid #000;
`
const Col = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: flex-start;
`
const Circle = styled.div`
    background-color: ${props => props.c&&(props.c)};
    height: 12px;
    width: 12px;
    border-radius: 50%;
` 