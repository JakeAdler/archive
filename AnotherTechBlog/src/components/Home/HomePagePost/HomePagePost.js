import React from 'react';
import styled  from 'styled-components';
import Paper from '../../Global/Paper/Paper';
import Flex from '../../Global/Flex/Flex';

const HPPost = styled(Paper)`
    margin: 20px;
    width: 100%;
    min-height: 150px;
`

export default function HomePagePost(props){
    const { post } = props;
    const {
        author,
        body,
        description,
        title,
    } = post;

    return(
        <HPPost>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h4>Author: {author}</h4>
            <p>{body}</p>
        </HPPost>
    )
}