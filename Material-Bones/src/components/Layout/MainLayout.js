import React from 'react';
import ResetCSS from '../../assets/styles/ResetCSS';
import Header from '../Header/Header';
import {StylesProvider} from '@material-ui/styles'

const MainLayout = ({children}) => {
    return(
        <StylesProvider>
            <Header />
            <ResetCSS/>
            {children} 
        </StylesProvider>
    )
}
export default MainLayout;