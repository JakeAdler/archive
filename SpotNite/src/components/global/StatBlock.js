import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class StatBlock extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    };
    render(){
        const styles = this.styles
        const KillsDeaths = this.props.Kills / this.props.GamesPlayed
        const KD = KillsDeaths.toFixed(2);
        return(
            <View style={styles.Container}>
                <Text style={styles.Title}>{this.props.Title}</Text>
                <View style={styles.Block}>
                    <Text style={styles.StatLable}>WINS</Text>
                    <Text style={styles.Stat}>{this.props.Wins}</Text>
                    <Text style={styles.StatLable}>KILLS</Text>
                    <Text style={styles.Stat}>{this.props.Kills}</Text>
                    {
                        this.props.GamesPlayed ?
                        <View> 
                        <Text style={styles.StatLable}>K/D</Text>
                        <Text style={styles.Stat}>{KD}</Text>
                        </View>
                        :
                        <View></View>
                    }
                </View>
            </View>
        )
    }
    styles = {
        Container: {
            width: this.props.Width || 67,
            height: this.props.Height || 77,
            textAlign: 'center'
        },
        Block: {
            width: this.props.Width || 67,
            height: this.props.Height || 77,
            marginRight: 10,
            borderWidth: 2,
            borderColor: '#000000',
            padding: 2
    
        },
        Title: {
            fontFamily: 'Burbank',
            textAlign: 'center',
            color: '#e0e0e0',
            fontSize: 18,
        },
        StatLable:{
            fontFamily: 'Mono',
            fontSize: 14,
            color: '#2fc658',
            textAlign: 'center'
        },
        Stat: {
            fontFamily: 'Mono',
            fontSize: 14,
            color: '#ffdf00',
            textAlign: 'center'
        }


    }

}