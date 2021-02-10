// @ts-check
import React from 'react';
import Loading from '../components/Loading';

export default class LoadingScreen extends React.Component {
    constructor(props){
       super(props)
       this._loadFunc();
    }

    _loadFunc = () => {
       this.props.navigation.state.params.loadFunc();
    }

    // Render any loading content that you like here
   render() {
      return (
         <Loading />
      );
   }
 };