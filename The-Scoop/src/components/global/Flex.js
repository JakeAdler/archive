import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
    height: ${props => props.height ? props.height : 'auto'};;
    width: ${props => props.width ? props.width : 'auto'};;
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    align-items: ${props => props.align ? props.align : 'center'};
    justify-content: ${props => props.justify ? props.justify : 'flex-start'};
    padding: ${props => props.padding ? props.padding : '0px'};
`

const Flex = (props) => {
    const {
        children,
        direction,
        align,
        justify,
        padding,
        ...rest
    } = props
    return(
        <StyledFlex direction={direction} align={align} justify={justify} 
        padding={padding} {...rest}>
            {children}
        </StyledFlex>
    )
}
export default Flex;