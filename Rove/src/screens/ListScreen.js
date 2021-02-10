import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Vendors Near You',
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'A', data: ["Amy's Hot Dogs"]},
            {title: 'B', data: ["Bob's Moving Bakery", "Blaze Pizza"]},
            {title: 'C', data: ["Carmen's Food Truck", "Chipotle"]},
            {title: 'D', data: []},
            {title: 'E', data: ["EggSlut", "Emily's Chinese Food Truck"]},
            {title: 'F', data: []},
            {title: 'G', data: ["German's Hot Dogs"]},
            {title: 'H', data: []},
            {title: 'I', data: ["Itsy Bitsy Pizzas"]},
            {title: 'J', data: ["Jake's Tacos"]},
            {title: 'K', data: []},
            {title: 'L', data: ["Leo's Taco Truck", "Linda's Lemonade Stand"]},
            {title: 'M', data: ["McDonald's", "Margaret's Mexican Food"]},
            {title: 'N', data: ["Nikita's Indian Cuisine"]},
            {title: 'O', data: []},
            {title: 'P', data: ["Porto's Bakery", ""]},
            {title: 'Q', data: []},
            {title: 'R', data: ["Robert's Sandwiches"]},
            {title: 'S', data: ["Sarah's Bakery", "Subway"]},
            {title: 'T', data: ["Tina's Hot Dogs"]},
            {title: 'U', data: []},
            {title: 'V', data: ["Vaibhav's Food Truck", "Vlad's Russian Cuisine"]},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});