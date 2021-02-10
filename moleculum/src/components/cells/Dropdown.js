import React from 'react';
import styled from 'styled-components';
import { Button, Box } from '../atoms/index';
import { themed } from '../../utils';

const Dropdown = {};

const StyledDropdownToggle = styled(Button)({
    content: props => props.label ? props.label : 'test',
    userSelect: 'none'
},
    themed('Dropdown')   
);

const StyledDropdownMenu = styled(Box)`
    cursor: default;
    top: calc(100% + 3px);
    left: 0;
`

Dropdown.Toggle = (props) => {
    const {
        className,
        style,
        label,
        setOpen,
        ...rest
    } = props;


  

    return(
        <StyledDropdownToggle className={className} style={style} setOpen={setOpen} {...rest} >
            {label}
        </StyledDropdownToggle>
    )
};

Dropdown.Menu = (props) => {
    const {
        className,
        style,
        children,
        open,
        ...rest
    } = props
    return(
        <StyledDropdownMenu className={className} style={style} 
        {...rest} open={open}>
              {
                open ?
                <>{children}</>
                :
                <></>
            }
        </StyledDropdownMenu>
    )
}
 
Dropdown.Toggle.displayName = 'Dropdown.Toggle'
Dropdown.Menu.displayName = 'Dropdown.Menu'
export default Dropdown;