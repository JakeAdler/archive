import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #00000070;
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 500;
    border-radius: 5px;
    padding: 7px;
    padding-left: 13px;
    padding-right: 13px;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px #00000029;
    color: #FFFFFF;

    &:hover {
        background-color: #00000090;
        box-shadow: 2px 2px 2px 2px #00000029;
        transform: scale(1.1,1.1);
        transition-duration: 300ms;
    }
    &:active {
        outline: none;
    }
    &:focus {
        outline: none;
    }

`

export default function Button(props){
    const {
        children,
        onClick,
        className,
        ...rest
    } = props;
    return(
        <StyledButton onClick={onClick}
        className={className} {...rest}>{children}</StyledButton>
    )
}