import React, { Component } from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import Login from '../components/SignUp/Login';



export default class SignUpPage extends Component {
    


    render(){
        return(
                <MainLayout>
                    <Login></Login>

                </MainLayout>
        )
    }
}