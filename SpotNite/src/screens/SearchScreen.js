import React from 'react';
import { 
  View,
  TextInput,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import styles from '../constants/SearchScreenStyles';
import MainBackground from '../components/global/Background';
import SearchBox from '../components/search/SeachBox';
import SearchStats from '../components/search/SearchStats';


export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };
  constructor(props){
    super(props);
    this.state= {
      searchValue: null,
      userUid: null,
      searching: false,
      loadingComplete: false,
      platformSelected: null,
    }

    this._onSearchChange.bind(this);
    this._getSearchInfo.bind(this);
    this._getWins.bind(this);
  }
  _onSearchChange = (e) =>{
    this.setState({searchValue: e.nativeEvent.text});
  }

  _getSearchInfo = () => {
    //get User UID
    this.setState({searching: true});
    fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${this.state.searchValue}`)
    .then((res)=>{
      const body = res._bodyInit;
      const Body = JSON.parse(body);
      const UID = Body.uid;
      this.setState({userUid: UID},
        ()=>{
          this._getWins(this.state.userUid)
        });
    });
  }

  _getWins = (username) => {
    fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${username}`)
    .then((res)=>{
      const body = res._bodyInit;
      const Body = JSON.parse(body);
      console.log(Body);
      // Parse Data
      const totalWins = Body.overallData.defaultModes.placetop1;
      const totalKills = Body.overallData.defaultModes.kills;
      const EpicName = Body.epicName
      this.setState({EpicName: EpicName})
      if (Body.data.gamepad) {
        // Get Console Stats
        const Console = Body.data.gamepad;
        const consoleStats = {
          Solo: {
            Wins: Console.defaultsolo.default.placetop1 || 0,
            Kills: Console.defaultsolo.default.kills || 0,
            GamesPlayed: Console.defaultsolo.default.matchesplayed || 0,
          },
          Duo: {
            Wins: Console.defaultduo.default.placetop1 || 0,
            Kills: Console.defaultduo.default.kills || 0,
            GamesPlayed: Console.defaultduo.default.matchesplayed || 0,
          },
          Squad: {
            Wins: Console.defaultsquad.default.placetop1 || 0,
            Kills: Console.defaultsquad.default.kills || 0,
            GamesPlayed: Console.defaultsquad.default.matchesplayed || 0,
          }
        }
        this.setState({ConsoleStats: consoleStats})
      }
      if (Body.data.keyboardmouse) {
        // Get Pc Stats
        const PC = Body.data.keyboardmouse;
        const pcStats = {
          Solo: {
            Wins: PC.defaultsolo.default.placetop1 || 0,
            Kills: PC.defaultsolo.default.kills || 0,
            GamesPlayed: PC.defaultsolo.default.matchesplayed || 0,
          },
          Duo: {
            Wins: PC.defaultduo.default.placetop1 || 0,
            Kills: PC.defaultduo.default.kills || 0,
            GamesPlayed: PC.defaultduo.default.matchesplayed || 0,
          },
          Squad: {
            Wins: PC.defaultsquad.default.placetop1 || 0,
            Kills: PC.defaultsquad.default.kills || 0,
            GamesPlayed: PC.defaultsquad.default.matchesplayed || 0,
          }
        }
        this.setState({PCStats: pcStats}, () => {
          console.log(this.state)
        });
      } 
    })
    .then(()=>{
      this.setState({searching: false})
      this.setState({loadingComplete: true})
    });
  }

  render() {
    return (
      <MainBackground>
        <View style={styles.Container}>
          <Text style={styles.Title}>SEARCH FOR PLAYERS</Text>
          <SearchBox searchValue={this.state.searchValue} 
          _onSearchChange={this._onSearchChange} _getSearchInfo={this._getSearchInfo}/>
          {
            this.state.searching ? 
            <Text>Loading...</Text>
            :
            <View></View>
          }
          {
            this.state.loadingComplete ?
            <View style={styles.Stats}>
            <Text style={styles.Username}>{this.state.EpicName}</Text>
            
            <SearchStats 
            Solos={this.state.ConsoleStats.Solo} 
            Duos={this.state.ConsoleStats.Duo} 
            Squads={this.state.ConsoleStats.Squad}
            />
            </View>
            :
            <View></View>
          }
      
        </View>
      </MainBackground>
    );
  }

}

