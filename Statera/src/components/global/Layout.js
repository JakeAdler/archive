import React from 'react';
import { SafeAreaView } from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../assets/styles/theme';

const Safe = styled(SafeAreaView)`
    background-color: ${props=>props.theme.backgroundColor};
`

const ContentContainer = styled.View`
    width: 100%;
    height: 100%;
    position: relative;
`

export default function Layout(props){
    const {
        children
    } = props;
    return(
        <ThemeProvider theme={theme}>
            <Safe>
                <ContentContainer>
                    {children}
                </ContentContainer>
            </Safe>
        </ThemeProvider>
    )
}