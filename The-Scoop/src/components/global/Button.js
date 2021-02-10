import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/styles/colors';

const StyledButton = styled.button`
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 22px;
    text-decoration: none;
    color: #ffffff;
    background-color: ${props => props.color ? props.color : colors.primary};
    box-shadow: ${props => props.shadow ? props.shadow : '0px 4px 0px 0px #195984'};
    position: relative;
    display: inline-block;
    border: none;
    &:active {
        transform: translate(0px, 4px);
        -webkit-transform: translate(0px, 3px);
        box-shadow: 0px 1px 0px 0px #195984;
    }
`

export default function Button(props) {

    const {
        children,
        className,
        style,
        color,
        shadow,
        onClick,
        ...rest
    } = props;

    return(
        <StyledButton className={className} style={style} color={color} onClick={onClick} {...rest} shadow={shadow}>
            {children}
        </StyledButton>
    )

}