// @ts-check
import React from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';

export default class Loading extends React.Component {
    // TODO: We can customize the loading component however we want :)
    render() {
        return (
            <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
               <ActivityIndicator />
               <StatusBar barStyle="default" />
            </View>
        );
    }
}