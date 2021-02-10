import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/styles/colors';

const StyledSurface = styled.div`
    display: ${props => props.display ? props.display : 'static'};
    max-width: 100vw;
    width: auto;
    height: auto;
    border-radius: ${props => props.borderRadius ? props.borderRadius : '0px'};
    background-color: ${props => props.background ? props.background : colors.notquitewhite};
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin: ${props => props.margin ? props.margin : '0px'};
    z-index: 1;
`
const Surface = (props) => {
    const {
        children,
        margin,
        display,
        className,
        style,
        borderRadius,
    } = props;
    return(
        <StyledSurface margin={margin} display={display} className={className} style={style} borderRadius={borderRadius}>
            {children}
        </StyledSurface>
    )
};

export default Surface;