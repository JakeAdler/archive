import React from 'react';
import styled from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    height: ${props => props.height ? props.height : '100%'};
    width: ${props => props.width ? props.width : '100%'};
    flex-flow: ${props => props.direction ? props.direction : 'row'};
    justify-content: ${props => props.justify ? props.justify : 'center'};
    align-items: ${props => props.align ? props.align : 'center'};
    flex-wrap: ${props => props.wrap ? props.wrap : 'no-wrap'};
`

export default function Flex({
    children, 
    className, 
    style, 
    justify, 
    align, 
    direction,
    width,
    height,
    margin,
    wrap
}) {
    return(
        <FlexBox 
        className={className} 
        style={{
            height: height || 'auto',
            width: width || 'auto',
            margin: margin || 'none',
            ...style
        }}
        wrap={wrap}
        justify={justify}
        align={align}
        direction={direction}>
            {children}
        </FlexBox>
    )
}