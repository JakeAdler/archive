import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Form,
    TouchableOpacity 
} from 'react-native'
export default class SearchBox extends Component {
    constructor(props){
        super(props);
    } 
    _onSearchChange = e => {
        this.props._onSearchChange(e)
    }
    render(){
        const styles = this.styles
        return(
        <View>
            <TextInput value={this.props.searchValue} 
            onChange={this._onSearchChange} 
            style={styles.Input} />
            <TouchableOpacity style={styles.SearchBtn} onPress={this.props._getSearchInfo}>
                <Text style={styles.Search}>SEARCH</Text>
            </TouchableOpacity>
        </View>
        )
    }
    styles = {
        Container: {
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        Search: {
            color: '#fdfdfd',
            fontFamily: 'Burbank',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 'auto',
            marginBottom: 'auto',
            marginRight: 3,
            marginLeft: 3

        },
        Input: {
            width: 200,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
            backgroundColor: '#fdfdfd',
            padding: 4
        },
        SearchBtn: {
            backgroundColor: 'orange',
            height: 30,
            width: 120,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10
        }
    }

}