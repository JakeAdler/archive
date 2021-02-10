import React from 'react'
import Layout from '../src/components/global/Layout';
import AppContext from '../src/context/AppContext';
import AspectContainer from '../src/components/home/AspectContainer';
import Header from '../src/components/home/Header';

export default class HomeScreen extends React.Component {
    render(){
        return(
            <Layout>
                <Header/>
                <AppContext.Consumer>
                    {({aspects})=>{
                        return(
                            <AspectContainer 
                            aspects={aspects}
                            />
                        )
    
                    }}
    
                </AppContext.Consumer>
            </Layout>
        )
    }
};
HomeScreen.navigationOptions = {
    header: null
}