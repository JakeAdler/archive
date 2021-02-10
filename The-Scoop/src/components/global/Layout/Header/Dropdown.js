import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
  } from 'styled-dropdown-component';
import Router from 'next/router';
import SignOut from './SignOut';
import colors from '../../../../assets/styles/colors';


const AbsoluteDropdown = styled.div`
    position: absolute;
    right: 200px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`
const Itm = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1rem;
    cursor: pointer;
`

const CustomDropdown = (props) => {

    const [ isDropdownHidden, toggleDropdown] = useState(true);
    const {
        children,
        className,
        style,
        setUserStateNull
    } = props;
    const _toggle = () => {
        const bool = !isDropdownHidden
        toggleDropdown(bool);
    }

    const _routeToSettings = () => {
        Router.push('/profile-settings');
    }
    const btnColor = colors.red;
    
    return(
        <div>
            <div onClick={_toggle}>
                {children}
            </div>
            <AbsoluteDropdown>
                <Dropdown className={className}>
                    <DropdownMenu hidden={isDropdownHidden}>
                        <DropdownItem>
                            <Itm onClick={_routeToSettings}>Settings</Itm>
                        </DropdownItem>
                        <DropdownItem>
                            <SignOut setUserStateNull={setUserStateNull}/>
                        </DropdownItem>

                    </DropdownMenu>
                    
                </Dropdown>
            </AbsoluteDropdown>
        </div>
    )

}
export default CustomDropdown;