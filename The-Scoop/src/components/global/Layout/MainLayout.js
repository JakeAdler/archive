import React, { Component } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './Header/Header';
import colors from '../../../assets/styles/colors';


const ContentContainer = styled.div`
    min-height: calc(100vh - 85px);
    background-color: ${colors.background};
    z-index: -1;
    margin-top: 85px;
    box-sizing: border-box;
    overflow-y: scroll;
`

class Layout extends Component {

    render(){
        const {
            children,
            title
        } = this.props;
        return(
            <div>
                    <Head key='LayoutHead'>
                        <title>{
                            title ?
                            title :
                            'The Scoop'
                            }</title>
                        
                    </Head>
                    <Header />
                    <ContentContainer>
                        {children}
                    </ContentContainer>
            </div>
        )
    }
}
export default Layout;