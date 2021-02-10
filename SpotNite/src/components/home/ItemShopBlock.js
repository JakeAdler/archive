import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native';

export default class ItemShopBlock extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    };
    render(){
        const styles = this.styles
        return(
            <View style={styles.Block}>
                <Text>{this.props.Title}</Text>
                <View>
                    <Text >{this.props.Name}</Text>
                    <Image source={{uri: this.props.ImageSrc}}/>
                    <Text>this.props.Cost}</Text>
                </View>
            </View>
        )
    }
    styles = {
        Block: {
            width: 65,
            height: 75,
            marginRight: 10,
            borderWidth: 2,
            borderColor: '#000000',
            padding: 2
    
        },
        Title: {
            fontFamily: 'Burbank',
            textAlign: 'center',
            color: '#e0e0e0',
            marginRight: 10,
            fontSize: 20,
        },
        StatLable:{
            fontFamily: 'Burbank',
            fontSize: 16,
            color: '#2fc658',
            textAlign: 'center'
        },
        Stat: {
            fontFamily: 'Burbank',
            fontSize: 16,
            color: '#ffdf00',
            textAlign: 'center'
        }


    }

}