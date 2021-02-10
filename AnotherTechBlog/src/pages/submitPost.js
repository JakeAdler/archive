import React from 'react';
import styled from 'styled-components';
import MainLayout from '../components/Layouts/MainLayout';
import SubmitPostForm from '../components/SubmitPost/SubmitPostForm';

const FormContainer = styled.div`
    width: 60vw;
    margin: 0 auto;
    padding-top: 100px;
`

export default function SubmitPostPage(props){
    

    return(
        <MainLayout>
            <FormContainer>
                <SubmitPostForm/>
            </FormContainer>
        </MainLayout>
    )

}