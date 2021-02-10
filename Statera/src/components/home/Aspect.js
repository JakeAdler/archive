import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
    width: 80%;
    height: 125px;
    border: 1px solid #000000;
    margin: 10px auto;
    padding: 5px;
`
const Title = styled.Text`
    font-size: 20px;
`
const Description = styled.Text`
    font-size: 12px;
`
const Hours = styled.Text`
    text-align: center;
    font-size: 20px;
`
const HoursLabel = styled.Text`
    font-size: 10px;
`
const HasStartTime = styled.Text`
    font-size: 15px;
`
export default function Aspect(props){
    const {
        aspect
    } = props;
    const {
        name,
        description,
        hours,
        hasStartTime
    } = aspect;
    console.log("ASPECT FROM ASPECT AT HOME -- ", aspect);
    return(
        <Container>
            <Title>{name}</Title>
            {
                description && (
                    <Description>{description}</Description>
                )
            }
            <Hours>{hours} <HoursLabel>HOURS REMAINING</HoursLabel></Hours>
            <HasStartTime>HAS START TIME ? {`${hasStartTime}`}</HasStartTime>
        </Container>
    )
}