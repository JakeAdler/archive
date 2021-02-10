import React from 'react'
import styled from 'styled-components';
import Layout from '../src/components/global/Layout';
import AppContext from '../src/context/AppContext';
import LoadingComponent from '../src/components/loading/LoadingComponent';

const Container = styled.View`
    width: 100%;
    height: 50%;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Header = styled.Text`
    color: #FFFFFF;
`



export default function LoadingScreen(props){
    const {
        navigation
    } = props;
    return(
        <Layout>
            <Container>
                <AppContext.Consumer>
                    {({populateAspects})=>(
                        <LoadingComponent
                        populateAspects={populateAspects}
                        navigation={navigation}/>
                    )}
                </AppContext.Consumer>
            </Container>
        </Layout>
    )
}
LoadingScreen.navigationOptions = {
    header: null
}