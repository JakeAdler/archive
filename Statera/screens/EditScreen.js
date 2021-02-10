import React from 'react'
import styled from 'styled-components';
import { NavigationEvents } from 'react-navigation';
import { Text } from 'react-native';
import Layout from '../src/components/global/Layout';
import AppContext from '../src/context/AppContext';
import AspectContainer from '../src/components/edit/AspectContainer';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import AddAspectModal from '../src/components/edit/AddAspectModal';
 
const AddNewAspectButton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right: 10px;
`
const RemoveAspectButton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    left: 10px;
`
const TotalHoursText = styled.Text`
    text-align: center;
    font-weight: 600;
    font-size: 25px;
`
export default class EditScreen extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        openModal: false,
        isEditing: false,
        isRemoving: false,
        toBeEdited: null
    }
    

    componentDidMount(){
        this.setState({
            isRemoving: false,
        })
    }
    render(){
        return(
            <Layout>
            <TotalHoursText>Hours Remaining</TotalHoursText>
            <NavigationEvents 
            onWillBlur={()=>{
                this.setState({isRemoving: false});
            }}
            />
            <AppContext.Consumer>
                {({aspects, populateAspects, addAspect, editAspect, removeAspect})=>{

                    return(
                        <>
                        {
                            this.state.isRemoving === false ?
                            <RemoveAspectButton onPress={()=>{
                                this.setState({isRemoving: true});
                            }}>
                                <AntDesign
                                name='minuscircleo'
                                size={22}
                                />
                            </RemoveAspectButton>
                            :
                            <RemoveAspectButton onPress={()=>{
                                this.setState({isRemoving: false});
                            }}>
                                <MaterialCommunityIcons 
                                name='cancel'
                                size={26}
                                />
                                <Text>Cancel</Text>
                            </RemoveAspectButton>
                        }
                           <AddNewAspectButton onPress={()=>{
                               this.setState({
                                   openModal: true,
                                   isEditing: false
                                });
                           }}>
                                <AntDesign 
                                name='pluscircleo'
                                size={22}
                                />
                            </AddNewAspectButton>
                            <AspectContainer
                                aspects={aspects}
                                populateAspects={populateAspects}
                                addAspect={addAspect}
                                removeAspect={removeAspect}
                                editAspect={editAspect}
                                setOpen={(bool)=>{
                                    this.setState({openModal: bool})
                                }}
                                isRemoving={this.state.isRemoving}
                                onRequestEdit={(requestEdit)=>{
                                    this.setState({
                                        toBeEdited: requestEdit,
                                        isEditing: true,
                                        openModal: true
                                    });
                                }}
                                onRequestDelete={(requestDelete)=>{
                                    removeAspect(requestDelete);
                                }}
                            />
                            <AddAspectModal 
                            open={this.state.openModal}
                            setOpen={(bool)=>{this.setState({openModal: bool})}}
                            isEditing={this.state.isEditing}
                            toBeEdited={this.state.toBeEdited}
                            onFormSubmit={(obj)=>{
                                addAspect(obj)
                                    .then((res)=>{
                                    
                                });
                            }}
                            onEditSubmit={(original, edited)=>{
                                editAspect(original, edited);
                                this.setState({isEditing: false});
                            }}/>
                        </>
                    )
                }}
            </AppContext.Consumer>
        </Layout>
            
        )
    }
}
EditScreen.navigationOptions = {
    header: null,
    headerLeft: null, 
    headerRight: null
}