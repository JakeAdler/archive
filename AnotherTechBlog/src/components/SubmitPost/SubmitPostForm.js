import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from '../Global/Paper/Paper';
import Input from '../Global/Input/Input';
import Flex from '../Global/Flex/Flex';
import Button from '../Global/Button/Button';
import { db } from '../../utils/firebase';
import UserContext from '../../context/UserContext';
import { navigate } from '@reach/router';
import { firestore } from 'firebase';

const StyledForm = styled.form`
    width: 100%;
`
const FormContainer = styled(Paper)`
    padding: 25px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-flow: column;
    align-items: center;
`
const Label = styled.h3`
    padding-top: 10px;
    font-size: 1.5rem;
    margin-right: 25px;
`
const PostInput = styled(Input)`
`
const Row = styled(Flex)`
    margin-top: 25px;
`

export default class SubmitPostForm extends Component {
    state={
        title: '',
        description: '',
        tags: '',
        body: '',
        name: '',
        error: false,
        successs: null,

    }
    componentDidMount(){
        this.setState({
            name: this.context.user.name
        });
    }
    _addPostToDB = (obj) => {
        db.collection("blogPosts").add(obj)
        .then((doc)=>{
            this.setState({
                successs: true
            },()=>{
                navigate('/')
            })
        }).catch((err)=>{
            //TODO: Do something with this and success
            this.setState({
                error: true
            });
        });
    }

    _handleBlogSubmission = () => {

        const {
            title,
            description,
            tags,
            body,
            name
        } = this.state;
        // TODO: Time stamp -- FIREBASE has funcs for this
        // Also check for profanity
        const timestamp = firestore.FieldValue.serverTimestamp();
        console.log(timestamp)
        const postInfo = {
            title: title,
            description: description,
            tags: tags,
            body: body,
            author: name
        }
        // this._addPostToDB(postInfo);

        
    }

    _handleInputChange = (e) => {
        const {
            name,
            value
        } = e.target
        this.setState({ [name] : value })
    }

    render(){
        const {
            title,
            description,
            tags,
            body
        } = this.state
        return(
            <div>
                <FormContainer>
                        <Row width='100%' justify='space-between' align='flex-start'>
                            <Label>Title</Label>
                            <PostInput value={title} name='title'
                            type='text' autocomplete='off' 
                            onChange={this._handleInputChange}
                            style={{width: '70%'}}/>
                        </Row>

                        <Row width='100%' justify='space-between' align='flex-start'>
                            <Label>Description</Label>
                            <PostInput value={description} name='description' 
                            type='text' autocomplete='off' 
                            onChange={this._handleInputChange}
                            style={{width: '70%'}}/>
                        </Row>

                        <Row width='100%' justify='space-between' align='flex-start'>
                            <Label>Tags</Label>
                            <PostInput value={tags} name='tags' 
                            type='text' autocomplete='off' 
                            onChange={this._handleInputChange}
                            style={{width: '70%'}}/>
                        </Row>

                        <Row width='100%' justify='space-between' align='flex-start'>
                            <Label>Body</Label>
                            <PostInput value={body} name='body' 
                            type='text' autocomplete='off' 
                            onChange={this._handleInputChange}
                            style={{width: '70%', height: '200px'}} textarea={true}/>
                        </Row>

                        <Row width='calc(80% - 50px)' style={{marginLeft: 'auto'}}>
                            <Button onClick={this._handleBlogSubmission}>Test</Button>
                        </Row>
                </FormContainer>
            </div>
        )
    }
}
SubmitPostForm.contextType = UserContext;