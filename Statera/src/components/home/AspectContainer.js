import React from 'react';
import styled from 'styled-components';
import Aspect from './Aspect';
const Container = styled.ScrollView`
    width: 100%;
    height: 80%;
    margin: auto;
    border: 1px solid #000000;
`

const AspectContainer = (props) => {
    const {
        children,
        aspects
    } = props;
    return(
        <Container>
            {
                aspects.map((aspect)=>(
                    <Aspect
                    aspect={aspect}
                    key={aspect.uuid}
                    />
                ))
            }
        </Container>
    )
}
export default AspectContainer