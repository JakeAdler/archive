import React, { Component } from "react";
import styled from 'styled-components';
import MainLayout from "../components/Layouts/MainLayout";
import HomePagePost from '../components/Home/HomePagePost/HomePagePost';
import Flex from '../components/Global/Flex/Flex';
import { db } from '../utils/firebase';



export default class IndexPage extends Component {

  state = {
    posts: [],

  };

  componentDidMount(){
    this._fetchHomePagePosts();
  }

  _fetchHomePagePosts = ( ) => {
      db.collection("blogPosts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const {
              id,
              author,
              body,
              title,
              description
            } = doc.data();
            const post = {
              id: id,
              author: author,
              body: body,
              title: title,
              description: description
            }
            this.setState((prevState)=>{
              return { posts: [...prevState.posts, post]}
            }) 
        });
    });
  }

  render(){
    return(
      <MainLayout>
         <Flex direction='column' width='60vw' margin='0 auto' height='auto'>
          {
            this.state.posts.map((post)=>{
              return(
            
                <HomePagePost post={post}/>

              )
            })
          }
        </Flex>
      </MainLayout>
    )
  }
  
}