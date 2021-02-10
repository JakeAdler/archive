import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components';
import Button from '../global/Button';
import generateUUID from 'uuid/v4';


const Overlay = styled.View`
    height: 100%;
    width: 100%;
`
const FormContainer = styled.View`
    width: 80%;
    height: 60%;
    border-radius: 10px;
    background-color: #FFFFFF;
    position: relative;
    margin: auto;
    flex-direction: column;
    align-items: flex-start;
`
const CloseButton = styled.TouchableOpacity`
    height: auto;
    width: auto;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 5;
`
const FormHeader = styled.View`
    height: 20%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
    padding-top: 25px;
    z-index: 2;
`
const FormBody = styled.View`
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const FormTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
`
const Input = styled.TextInput`
    width: 100%;
    height: 30px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-bottom: 50px;
`
const Submit = styled(Button)`
    align-self: center;
    margin-top: 75px;
    z-index: 10;
`
const AddStartTimeSwitch = styled.Switch`   
    margin-right: auto;
`

export default function AddAspectModal(props) {
    const {
        open,
        isEditing,
        toBeEdited,
        onEditSubmit,
        setOpen,
        onFormSubmit
    } = props;

    let restOfOriginalProperties;
    if (isEditing && toBeEdited) {
        const {
            name,
            description,
            hasStartTime,
            ...rest
        } = toBeEdited;
        restOfOriginalProperties = {...rest};
    }

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [hasStartTime, setHasStartTime] = useState(false);
    const [startedAt, setStartedAt] = useState(false);
    const uuid = () => generateUUID();

    const resetState = () => {
        setName('');
        setDescription('');
        setHasStartTime(false);
        setOpen(false);
    }

    const newAspect = {
        name,
        description,
        hasStartTime,
        uuid: uuid(),
        hours: 0,
    };
    
    const editedAspect = {
        name,
        description,
        hasStartTime,
        uuid: uuid(),
        ...restOfOriginalProperties
    };
    useEffect(()=>{
        if (toBeEdited){
            setName(toBeEdited.name || '');
            setDescription(toBeEdited.description || '');
            setHasStartTime(toBeEdited.hasStartTime || false);
        }
    }, [toBeEdited])

    return(
        <>
        { open && (
            <Overlay>
            <Modal 
            transparent={true}
            visible={open}
            >
                <FormContainer>
                    <CloseButton 
                    onPress={()=>{
                        setOpen(false)
                    }}>
                        <AntDesign
                        name='closecircleo'
                        size={22}/>
                    </CloseButton>
                    <FormHeader>
                        <FormTitle>
                            {
                                isEditing ?
                                "EDIT ASPECT"
                                :
                                "CREATE A NEW ASPECT"
                            }
                        
                        </FormTitle>
                    </FormHeader>
                    <FormBody>
                        <Input
                        placeholder='Name*' 
                        value={name}
                        onChange={(e)=>{
                            setName(e.nativeEvent.text)
                        }}/>  
                        <Input
                        placeholder='Description (optional)' 
                        value={description}
                        onChange={(e)=>{
                            setDescription(e.nativeEvent.text)
                        }}/>
                        <AddStartTimeSwitch 
                        value={hasStartTime}
                        onValueChange={(bool)=>{
                            setHasStartTime(bool);
                        }}
                        />
                        
                        <Submit onPress={()=>{
                            if (!isEditing){
                                onFormSubmit(newAspect);
                                resetState();
                            } else {
                                console.log("ORIGINAL PROPS --- ", toBeEdited);
                                console.log("REST OF ORIGINAL PROPS --- ", restOfOriginalProperties);
                                onEditSubmit(toBeEdited, editedAspect);
                                resetState();
                            }
                        }}>
                            {
                                isEditing ?
                                "SAVE"
                                :
                                "SUBMIT"
                            }
                        </Submit>      
                    </FormBody>
                </FormContainer>
            </Modal>
        </Overlay>  
        )}
        </>
    )
}