import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Flex from '../../Flex';
import Button from '../../Button';
import localforage from 'localforage'
import { Firebase } from '../../../../config/firebaseconfig';
import { IoMdLogOut } from 'react-icons/io';
import colors from '../../../../assets/styles/colors';


const SignOutButton = styled(Button)`
    width: 80px;
    height: 30px;
    font-size: 1rem;
    background-color:${colors.red};
`

const SignOut = (props) => {
    const {
        setUserStateNull,
        className,
        style,
        color,
    } = props;
    const _signOut = () => {
        Firebase.auth().signOut().then(()=>{
            localforage.removeItem('user').then(()=>{
                console.log('Logged out user');
                setUserStateNull();
            }).catch((err)=>{
                console.log('Cant log out user' + err);
            });
        });
    }
    const btnShadow = '0px 4px 0px 0px #940101';
    return(
        <SignOutButton onClick={_signOut} className={className} shadow={btnShadow}
        style={{width: props.width || '75px', ...style}} color={color}>
            <Flex justify='space-around'>
                Sign out <IoMdLogOut/>
            </Flex>
        </SignOutButton>
    )
}
export default SignOut;