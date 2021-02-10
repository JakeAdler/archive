import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import Button from '../global/Button';


const Navigate = styled(Button)`
    margin: 0 auto;
    margin-top: 100px;
`
const Container = styled.View`
    text-align: center;
`

export default function LoadingComponent (props){
    const {
        populateAspects,
        navigation
    } = props;
    const [doneFetching, setDoneFetching] = useState(false);
    useEffect(()=>{
        populateAspects(null)
            .then((stored)=>{ 
                setDoneFetching(true);
            });
    },[])
    return(
        <View>
            {
                doneFetching ?
                <Container>
                    <Text>Hello done fetching</Text>
                    <Navigate onPress={()=>{navigation.navigate('App')}}>
                        Enter
                    </Navigate>
                </Container>
                :
                <Text>Fetching.....</Text>
            }
         
        </View>
    )
}