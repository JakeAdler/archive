import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';

export default class MainBlock extends Component {
    constructor(props){
        super(props);
        this.state ={
            fullscreen: false
        }
        this._fullscreen.bind(this)
    }
    _fullscreen = () => {
        const bool = !this.state.fullscreen
        this.setState({fullscreen: bool})
    }
    render(){
        const styles = this.styles;
        const fullscreen = this.state.fullscreen;

        return(
            <View>
                {
                fullscreen ?
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.fullscreen}
                style={styles.ModalStyles}>
                    <Text>Test</Text>
                    <TouchableOpacity title='Close' onPress={this._fullscreen}
                    style={styles.CloseBtn}>
                    <Text style={styles.CloseBtn}>Close</Text>
                    </TouchableOpacity>
                </Modal>
                :
                <View style={styles.Block}>
                    <Text style={styles.Title}>{this.props.Title}</Text>
                    <Text style={styles.SubTitle}>
                    {this.props.SubTitle}
                    </Text>
                    <View style={styles.Container}>
                        {this.props.children}
                    </View>
                    <View style={styles.BtnContaier}>
                        <TouchableOpacity title={'See All'}
                            onPress={this._fullscreen}>
                            <Text style={styles.SeeAllButton}>See All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }
            </View>
           
        )
    }
    styles = {
        Block: {
            width: 320,
            height: this.props.height || 200,
            marginTop: 25,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#3a37ef',
            padding: 15,
            borderRadius: 3
        },
        Title: {
            fontFamily: 'Burbank',
            fontSize: 30,
            textAlign: 'center',
            color: '#e0e0e0',
            marginBottom: 5
        },
        SubTitle: {
            fontFamily: 'Burbank',
            fontSize: 20,
            textAlign: 'center',
            color: '#e0e0e0'
        },
        Container: {
            flex: 1,
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 10
        },
        ModalStyles: {
            height: '85%',
            width: '85%',
            padding: 50
        },
        BtnContaier: {
            /*
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            height: 30,
            */
           position: 'absolute',
           left: '90%',
           top: 15,
        },
        SeeAllButton: {
            color: '#000000',

        }
        
    }
}