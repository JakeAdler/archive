import React, { Component, } from 'react';
import {
    View,
    AsyncStorage,
    Image,
    Text
} from 'react-native';
import firebase from 'react-native-firebase';
import AuthBackground from '../components/auth/AuthBackground';

// This is the page where we will load any content for the main page
//TODO: prefetch images --> https://docs.expo.io/versions/latest/guides/preloading-and-caching-assets/
export default class LoadingDataScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            intialStatsLoaded: false
        }
    };
    componentDidMount = async () => {

        // Get user info from device storage
        await AsyncStorage.getItem('userUID')
        .then((user)=>{
            //Regex removes quotes from username 
            this._loadData(user.replace(/\"/g, ""))    
        })
        .catch((err)=>{
            console.log(err)
        });
    };

    _loadData = async (userUID) =>{
       try { 
            //LOAD EVERYTHING HERE

            //Load Shop
            let GetShopURI = 'https://fortnite-public-api.theapinetwork.com/prod09/store/get?language=en'; 
            let ShopRes = await fetch(GetShopURI);
            let shopRes = await JSON.parse(ShopRes._bodyInit);
            let items = await shopRes.items
            let filteredItems = await items.filter((item)=>{
                if (item.featured === 1){
                    return item
                } else {
                    return null
                }
            })
            let featuredItems = await filteredItems.map((item, i)=>{
                let Item = {
                    name: item.name,
                    cost: item.cost,
                    image: item.item.images.background,
                    rarity: item.item.rarity
                }
                return Item
            })

            //Load Challaneges
            //TODO: CHANGE SEASON TO CURRENT WHEN API UPDATED
            let GetChallengesURI = 'https://fortnite-public-api.theapinetwork.com/prod09/challenges/get?season=8';
            let ChallengeRes = await fetch(GetChallengesURI);
            let challengeRes = await JSON.parse(ChallengeRes._bodyInit);
            let currentWeek = await parseInt(challengeRes.currentweek); 
            let allChallenges = await challengeRes.challenges;
            let currentChallenges = await challengeRes.challenges[`week${currentWeek}`];
            let Challenges = await {
                Week: currentWeek,
                AllChallenges: allChallenges,
                CurrentChallenges: currentChallenges
            }
            
            // Load News 
            //TODO: DONT display pictures for each news block, some of the pics are the same!
            let GetNewsURI = 'https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get';
            let NewsRes = await fetch(GetNewsURI);
            let newsRes = await JSON.parse(NewsRes._bodyInit);
            let News = await newsRes.entries;

            //Load User Stats
            let GetStatsURI = `https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${userUID}`;
            let StatRes = await fetch(GetStatsURI);
            let statRes = await JSON.parse(StatRes._bodyInit);
            let consoleBody = await statRes.data.gamepad;

            
            //TODO: Parse PC and Mobile Stats
            let consoleSolos =  await {
                Kills: consoleBody.defaultsolo.default.kills,
                Wins: consoleBody.defaultsolo.default.placetop1
            }

            let consoleDuos =  await {
                Kills: consoleBody.defaultduo.default.kills,
                Wins: consoleBody.defaultduo.default.placetop1
            }

            let consoleSquads = await {
                Kills: consoleBody.defaultsquad.default.kills,
                Wins: consoleBody.defaultsquad.default.placetop1,
            }    

            // Pass loaded data to the load complete function which carries data to home page
            this._loadComplete(consoleSolos, consoleDuos, consoleSquads, featuredItems, Challenges, News, items, allChallenges);

        } catch (err) {
            console.log(err)
        }
        }; 

    _loadComplete = (consoleSolo,consoleDuo,consoleSquad,items, challenges, news, allItems, allChallenges) =>{
        this.props.navigation.navigate('Home', {
            consoleSolos: {
                kills: consoleSolo.Kills,
                wins: consoleSolo.Wins
            },
            consoleDuos : {
                kills: consoleDuo.Kills,
                wins: consoleDuo.Wins
            },
            consoleSquads: {
                kills: consoleSquad.Kills,
                wins: consoleSquad.Wins,
            },
            itemShop: items,
            challenges: challenges,
            news: news,
            allItems: allItems,
            allChallenges: allChallenges
            
        });
    };

    render(){
        const styles = this.styles
        return(
            <AuthBackground>
                <View style={styles.Container}>
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            </AuthBackground>
        )
    }
    styles= {
        Container : {
            marginTop: 25,
        },
        loadingText : {
            marginTop: 50,
            fontFamily: 'Burbank',
            color: '#fdfdfd',
            fontSize: 40,
            textAlign: 'center'
        }
    }
}