import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const FullScreenMin = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    overflow: hidden;
    position: relative;
`
const ChildContainer = styled.div`
    min-height: calc(100vh - 135px);
    margin-top: 80px;
    margin-bottom: 75px;
    height: auto;
    background-color: #BDBDBD;
    font-family: 'Roboto';
    overflow-y: scroll;
`


export default class MainLayout extends Component {



    render(){
        const { children } = this.props;
        return(
            <FullScreenMin>
                <ResetCSS/>
                <Header/>
                <ChildContainer>
                    {children}
                </ChildContainer>
                <Footer/>
            </FullScreenMin>
        )
    }
}



const ResetCSS = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a, a:visited {
        text-decoration: none;
        color: inherit;
    }
    
`

