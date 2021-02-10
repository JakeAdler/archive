import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Aspect from './Aspect';
import theme from '../../assets/styles/theme'
import { getCurrentFrame } from 'expo/build/AR';

const Container = styled.ScrollView`
    width: 100%;
    height: 80%;
    margin: auto;
    padding-top: 25px;
`
const TotalHoursNum = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: 300;
`

export default function AspectContainer(props) {
    const {
        onRequestDelete,
        editAspect,
        aspects, 
        isRemoving,
        setIsAdding,
        onRequestEdit,
    } = props;
    const totalUsed = aspects.reduce((accumulator, current)=>(
        accumulator + current.hours
    ),0);
    const initState = 24 - totalUsed;
    const [totalHours, setTotalHours] = useState(initState);
    return(
        <>
            <TotalHoursNum>{totalHours}</TotalHoursNum>
            <Container>
                <ThemeProvider theme={theme}>
                {
                aspects && (
                    aspects.map((aspect)=>{
                        return(
                            <Aspect
                            editAspect={editAspect}
                            onRequestEdit={onRequestEdit}
                            onRequestDelete={onRequestDelete}
                            isRemoving={isRemoving}
                            setIsAdding={setIsAdding}
                            dataAspect={aspect}
                            key={aspect.uuid}
                            title={aspect.name}
                            description={aspect.description || ""}
                            changeTotalHours={(diff)=>{
                                const newHours = totalHours - diff;
                                setTotalHours(newHours);
                            }}
                            />
                    )})
                )   
                }
                </ThemeProvider>
            </Container>
        </>
    )
}