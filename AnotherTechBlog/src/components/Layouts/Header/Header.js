import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Paper from '../../Global/Paper/Paper';
import Flex from '../../Global/Flex/Flex';
import UserContext from '../../../context/UserContext';

const HeaderContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 80px;
`
const NoTopBorderPaper = styled(Paper)`
    height: 100%;
    border-radius:  5px 5px 5px 5px;
    padding: 15px;
    background-color: #EEEEEE;
` 

const Title = styled.h1`
    font-family: 'Roboto';
`
const NameCapitalized = styled.p`
    text-transform: capitalize;
`

export default function Header () {


    return(
        <HeaderContainer>
            <UserContext.Consumer>
                {ctx => {

                    const { name } = ctx.user;

                    return (
                    <NoTopBorderPaper>
                        <Flex justify='space-between'>
                            <div>
                                <Link to='/'>
                                    <Title>Another Tech Blog</Title>
                                </Link>
                            </div>
                            <div>
                                <Link to='/submitPost/'>
                                    Submit
                                </Link>
                            </div>
                            <div>
                                {
                                    ctx.user ?
                                    <div>
                                        <NameCapitalized>
                                            Welcome, {name}
                                        </NameCapitalized>
                                        <button onClick={ctx.signOut}>
                                            Sign Out
                                        </button>
                                    </div>
                                    
                                    :
                                    <div>
                                    <div>NOT LOGGED IN</div>
                                    <Link to='/signUp/'>
                                    Sign In / Sign Up 
                                    </Link>
                                    </div>

                                }
                                    
                            </div>
                        </Flex>
                    </NoTopBorderPaper>
                )}}
          
            </UserContext.Consumer>
        </HeaderContainer>
    )
}