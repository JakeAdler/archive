import React, {useState} from 'react';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import { Alert } from 'react-native'
import Slider from 'react-native-slider';
import colors from '../../assets/styles/colors';
import styled from 'styled-components';
import Button from '../global/Button';

const Container = styled.View`
    width: 80%;
    height: 125px;
    margin: 0 auto;
    margin-bottom: 20px; 
    padding: 10px;
    border: 1px solid #000000;
    border-radius: 5px;
    position: relative;
`
const EditButton = styled.TouchableOpacity`
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 5;
`
const Title = styled.Text`
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 1px;
`
const Description = styled.Text`
    font-weight: 400;
    font-size: 10px;
    padding-left: 1px;
`
const SliderContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    margin-top: 10px;
`
const Hours = styled.Text`
    margin-left: 5%;
    color: #ffffff;
`
const IsRemovingButton = styled(Button)`
    margin: auto;
    background-color: ${props => props.theme.button.red};
`

export default function Aspect(props){
    const {
        isRemoving,
        editAspect,
        dataAspect,
        onRequestEdit,
        onRequestDelete,
        changeTotalHours,
    } = props;
    const {
        name,
        description, 
        hours
    } = dataAspect
    const [statefulHours, setHours] = useState(hours);
    let aspectCopy = {...dataAspect};
    const onSliderValueChange = (e) => {
        const rounded = Math.round(e);
        let diff = rounded - statefulHours;
        if (rounded !== statefulHours) {
            aspectCopy.hours = rounded;
            editAspect(dataAspect, aspectCopy)
            setHours(rounded);
            changeTotalHours(diff);
        }
    }

    return(
        <Container {...props}>
            <EditButton onPress={()=>{
                onRequestEdit(dataAspect);
            }}>
                <EvilIcons 
                name='pencil'
                size={28}/>
            </EditButton>
            <Title>{name}</Title>
            <Description>{description}</Description>
            {
                isRemoving ?
                <IsRemovingButton onPress={()=>{
                    Alert.alert(
                        'Are you sure?',
                        'You wont be able to get this back.', 
                        [
                            {text: 'Yes', 
                            onPress: ()=>{ 
                                onRequestDelete(dataAspect);
                                // remove the hours from edit screen  
                                changeTotalHours(-dataAspect.hours);
                            }
                            },
                            {
                                text: 'No',
                                onPress: ()=>{}
                            }
                        ],
                        {cancelable: false}
                    );
                }}>
                    <AntDesign 
                    name='delete'
                    style={{color: '#FFFFFF'}}/>
                </IsRemovingButton>
                :
                <SliderContainer>
                    <Slider 
                    value={statefulHours}
                    onValueChange={(e)=>{onSliderValueChange(e)}}
                    minimumValue={0}
                    maximumValue={12}
                    step={1}
                    style={{width: '80%'}}
                    trackStyle={{backgroundColor: colors.darkgreen}}
                    thumbStyle={{backgroundColor: '#FFFFFF'}}
                    minimumTrackTintColor={colors.yellow}
                    />
                    <Hours>{hours} HOURS</Hours>
                </SliderContainer>
            }
            
        </Container>
    )
}