// @ts-check
import React, { Component } from 'react';
import { MapView } from 'expo';
import {
    View,
    StyleSheet
} from 'react-native';

export default class HomeScreen extends React.Component {

    constructor(props) {
      super(props);
      // TODO: This call is temp and used only for testing.
      //this._getStitchClientExample();
    }

    static navigationOptions = {
      title: 'Welcome to the app!',
    };

    state = {
      mapRegion: null,
      lastLat: null,
      lastLong: null,
    }
  
    componentDidMount() {
      this.watchID = navigator.geolocation.getCurrentPosition((position) => {
        // Create the object to update this.state.mapRegion through the onRegionChange function
        let region = {
          latitude:       position.coords.latitude,
          longitude:      position.coords.longitude,
          latitudeDelta:  0.00922*1.5,
          longitudeDelta: 0.00421*1.5
        }
        this.onRegionChange(region, region.latitude, region.longitude);
      });
    }
  
    onRegionChange(region, lastLat, lastLong) {
      this.setState({
        mapRegion: region,
        // If there are no new values set use the the current ones
        lastLat: lastLat || this.state.lastLat,
        lastLong: lastLong || this.state.lastLong
      });
    }
  
    // componentWillUnmount() {
    //   navigator.geolocation.clearWatch(this.watchID);
    // }
  
    onMapPress(e) {
      console.log(e.nativeEvent.coordinate.longitude);
      let region = {
        latitude:       e.nativeEvent.coordinate.latitude,
        longitude:      e.nativeEvent.coordinate.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    }
  
    render() {
      return (
        <View style={{flex: 1}}>
          <MapView
            style={styles.container}
            region={this.state.mapRegion}
            onRegionChange={this.onRegionChange.bind(this)}
            onPress={this.onMapPress.bind(this)}>
            <MapView.Marker
              title="Current Location"
              description="Current Location"
              coordinate={{
                latitude: (this.state.lastLat + 0.00050) || -36.82339,
                longitude: (this.state.lastLong + 0.00050) || -73.03569,
              }}>
            </MapView.Marker>
            
            
            <MapView.Marker
              title="Margaret's Vegan Food Truck"
              description="Vegan Food"
              coordinate={{
                latitude: (this.state.lastLat + 0.00080) || -36.82339,
                longitude: (this.state.lastLong + 0.00080) || -73.03569,
              }}>
            </MapView.Marker>
  
            <MapView.Marker
              title="Vaibhav's Indian Chinese Food Truck"
              description="Chinese/Indian Cusine"
              coordinate={{
                latitude: (this.state.lastLat - 0.00020) || -36.82339,
                longitude: (this.state.lastLong - 0.00020) || -73.03569,
              }}>
              </MapView.Marker>
              
  
            <MapView.Marker
              title="Jake's Tacos"
              description="Authentic Tacos and Mexican Food"
              coordinate={{
                latitude: (this.state.lastLat + 0.00010) || -36.82339,
                longitude: (this.state.lastLong + 0.00010) || -73.03569,
              }}>
            </MapView.Marker> 
  
            <MapView.Marker
              title="German's Moving CheeseBurger Joint"
              description="American Cuisine"
              coordinate={{
                latitude: (this.state.lastLat - 0.00090) || -36.82339,
                longitude: (this.state.lastLong - 0.00090) || -73.03569,
              }}>
            </MapView.Marker>
            
          </MapView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      //paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  });


    // TODO: This is an example for how you query our collections.
    // _getStitchClientExample = () => {
      console.log("TEMP: Used for testing!");

      // TODO: THIS SHIT DOESN'T WORK!!!!! Stitch rules SUCK!!
      // vendors.find({})
      //   .toArray()
      //   .then(result => console.log(result))
      //   .catch(err => console.log(err));

      // customers.find({})
      //   .toArray()
      //   .then(result => console.log(result))
      //   .catch(err => console.log(err));
    // }
  
