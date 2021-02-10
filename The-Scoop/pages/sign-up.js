import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../src/components/global/Layout/MainLayout';

import { setCookie } from 'nookies';
import Button from '../src/components/global/Button';
import { UserContext } from '../src/context/UserContext';
const SignUpPage = () => {
    const [user, setUser] = useState(null)

    
    useEffect(()=>{
        console.log(user)
    })

    return(
        <Layout>
            Sign up Page

        </Layout>
    )
}
export default SignUpPage;