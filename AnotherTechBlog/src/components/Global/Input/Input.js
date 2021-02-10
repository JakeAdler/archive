import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
    padding: 8px;
    border: 1px solid #000000;
    border-radius: 5px;
    font-size: 1.25rem;
    
    &:focus {
        padding: 7px;
        box-shadow: none;
        outline: none;
        border: 2px solid #000000;
        transition-duration: 500ms;
    }

`
const StyledTextArea = styled.textarea`
    padding: 8px;
    border: 1px solid #000000;
    border-radius: 5px;
    font-size: 1.25rem;
    overflow-y: scroll;
    resize: none;
    
    &:focus {
        padding: 7px;
        box-shadow: none;
        outline: none;
        border: 2px solid #000000;
        transition-duration: 500ms;
    }
`


export default function Input(props){
    
    const {
        onChange,
        value,
        name,
        type,
        className,
        style,
        autocomplete,
        textarea,
        ...rest
    } = props;
    
    if (!textarea){
        return(
            <StyledInput onChange={(e) => {onChange(e) }} value={value} name={name} type={type} className={className} style={style} autoComplete={autocomplete} {...rest}/>
        )
    } else {
        return(
            <StyledTextArea  onChange={(e) => {onChange(e) }} value={value} name={name} type={type} className={className} style={style} {...rest}/>
        )
    }
    

}