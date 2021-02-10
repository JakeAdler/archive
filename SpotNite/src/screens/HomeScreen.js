import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  AsyncStorage,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Background from '../components/global/Background';
import styles from '../constants/HomeScreenStyles.js';
import MainBlock from '../components/home/MainBlock';
import StatBlock from '../components/global/StatBlock';
import ChallengeBlock from '../components/home/ChallengeBlock';
import NewsBlock from '../components/home/NewsBlock';
import Carousel from 'react-native-snap-carousel';
import FullScreenUserStats from '../components/home/fullscreens/FullScreenUserStats';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props)
    this.state ={
      isLoaded: false,
      username: '',
    }
  }
  componentWillMount(){
    this._retrieveUserInfo();
  }

  _renderCarouselItem ({item, index}) {
    return (
        <View style={styles.CContainer}>
            <Text style={styles.CTitle}>{ item.name }</Text>
            <Image 
            source={{uri: item.image}} 
            style={styles.CImage}/>
            <Text style={styles.CCost}>{ item.cost }</Text>
        </View>
    );
}

_retrieveUserInfo = async () => {
  try {
    const asyncUsername = await AsyncStorage.getItem('username');
    if (asyncUsername !== null) {
    asyncUsername.replace(/\"/g, "");
    this.setState({username: asyncUsername});
  
    }
  } catch (error) {
    console.log(error);
  }
};
  //TODO: DONT display pictures for each news block, some of the pics are the same!
  render() {
    const { navigation } = this.props;
    const consoleSolos = navigation.getParam('consoleSolos', 'CANT LOAD DATA');
    const consoleDuos = navigation.getParam('consoleDuos', 'CANT LOAD DATA');
    const consoleSquads = navigation.getParam('consoleSquads', 'CANT LOAD DATA');
    const ItemShop = navigation.getParam('itemShop', 'CANT GET ITEM SHOP');
    const Challenges = navigation.getParam('challenges','CANT LOAD CHALLENGES');
    const News = navigation.getParam('news', 'CANT GET NEWS');
    const allItems = navigation.getParam('allItems', 'CANT LOAD DATA');
    const allChallenges = navigation.getParam('allChallenges', 'CANT LOAD DATA')
    return (
      <View style={{flex: 1}}>
        <Background>
          <ScrollView style={styles.Container}>

              <MainBlock Title={'MY STATS'} SubTitle={this.state.username}>
                <View style={styles.Center}>
                  <StatBlock Title={'SOLOS'} 
                  Wins={consoleSolos.wins}
                  Kills={consoleSolos.kills}
                  />
                  <StatBlock Title={'DUOS'}
                    Wins={consoleDuos.wins}
                    Kills={consoleDuos.kills}
                  />
                  <StatBlock Title={'SQUADS'}
                  Wins={consoleSquads.wins}
                  Kills={consoleSquads.kills}
                  />
                  <StatBlock Title={'LTM'}
                    // TODO: PARSE LTM data
                    Wins={1}
                    Kills={1}
                  />
                </View>
            
                
              </MainBlock>

              <MainBlock Title={'ITEM SHOP'} SubTitle={'Featured Items'}>
                <Carousel
                ref={(c) => { this._carousel = c; }}
                data={ItemShop}
                renderItem={this._renderCarouselItem}
                sliderWidth={150}
                itemWidth={100}
                />
              </MainBlock>

              <MainBlock Title={'CHALLENGES'} 
              SubTitle={`Week ${Challenges.Week}`}
              height={300}>
                <ScrollView style={styles.ChallengeBlockStyle}>
                  {
                    Challenges.CurrentChallenges.map((challenge, i)=>{
                        return(
                          <ChallengeBlock key={i} Title={challenge.challenge}/>
                        )
                    })
                  }
                </ScrollView>
              </MainBlock>

              <MainBlock Title={'NEWS'} height={400}>
                  <ScrollView>
                    {
                      News.map((article, i)=>{
                        return(
                         <NewsBlock 
                         Title={article.title}
                         key={i}
                         >
                        <Image source={{uri: article.image}}
                        style={styles.NewsImage}/>
                        <Text style={styles.NewsBody}>{article.body}</Text>
                        </NewsBlock>
                        )
                      })
                    }
                  </ScrollView>
              
              </MainBlock>

          </ScrollView>
        </Background>
      </View>
    );
  }
};
