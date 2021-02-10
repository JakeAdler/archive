import React from 'react';
import styled from 'styled-components';
import MainLayout from '../components/Layout/MainLayout';


const Test = styled.h1`
    color: red;
`
const IndexPage = () => {
    return(
        <MainLayout>
            <Test>hello</Test>
        </MainLayout>
    )
}
export default IndexPage;