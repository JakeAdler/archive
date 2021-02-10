import React from 'react';
import styled from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: ${props => props.justify ? `${props.justify}` : 'space-between'};
    align-content: ${props=> props.align ? `${props.align}` : 'center'};
`
const Flex = ({ children, ClassName, Style }) => {
    return(
        <FlexBox className={ClassName} style={Style}>
            {children}
        </FlexBox>
    )
}
export default Flex;