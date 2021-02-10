import React, { Component } from 'react';
import {
    View
} from 'react-native';
import StatBlock from '../global/StatBlock';

export default class SearchStats extends Component {
    render(){
        const styles = this.styles
        return(
            <View style={styles.Container}>
            <StatBlock Wins={this.props.Solos.Wins}
            Kills={this.props.Solos.Kills}
            GamesPlayed={this.props.Solos.GamesPlayed}
            Height={115}
            Title={'SOLOS'}/>
            <StatBlock Wins={this.props.Duos.Wins}
            Kills={this.props.Duos.Kills}
            GamesPlayed={this.props.Duos.GamesPlayed}
            Height={115}
            Title={'DUOS'}/>
            <StatBlock Wins={this.props.Squads.Wins}
            Kills={this.props.Squads.Kills}
            GamesPlayed={this.props.Squads.GamesPlayed}
            Height={115}
            Title={'SQUADS'}/>
        </View>
        )
       
    }
    styles = {
        Container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 250,
            marginLeft: 'auto',
            marginRight: 'auto'

        }
    }
}