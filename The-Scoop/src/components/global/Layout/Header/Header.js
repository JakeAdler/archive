import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import Flex from '../../Flex';
import colors from '../../../../assets/styles/colors';
import SignInComponent from './SignIn';
import { FaRegBookmark } from 'react-icons/fa'

const StyledHeader = styled.div`
    padding-left: 10px;
    padding-right: 35px;
    width: calc(100vw - 45px);
    height: 85px;
    position: absolute;
    top: 0;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: ${colors.dark};
    color: #FFFFFF;
    z-index: 100;
`
const Bookmark = styled(FaRegBookmark)`
    margin-right: 40px;
    margin-left: 5px;
    cursor: pointer;
`
const Saved = styled(Flex)`
    cursor: pointer;
`

const Logo = styled.img`
    cursor: pointer;
    height: 85px;
`

const Header = () => {
    return(
        <StyledHeader>
                <Flex height='85px' justify='space-between'>
       
                    <Link href='/'>
                        <Logo src={require('../../../../assets/images/TheScoopLogo.png')}/>
                    </Link>

                    <Flex>
                        <div onClick={()=>{Router.push('/saved')}}> 
                            <Saved>Saved <Bookmark/> </Saved>
                        </div>
                        <SignInComponent/>
                    </Flex>  

                </Flex> 
        </StyledHeader>
    )
}

export default Header;