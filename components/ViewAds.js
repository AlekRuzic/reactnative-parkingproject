import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Ad from '../components/Ad';
import Ads from '../Ads.json';

class ViewAds extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        {Ads.map(function(ad, i) {
          return (
            <Ad
              address={ad.address}
              price={ad.price}
              description={ad.description}
              image={ad.image}
              key={i}
            />
          );
        })}

        {/* <Ad
          address="testing address"
          price={50}
          description="description"
          image={require('../assets/images/ad1.jpg')} /> */}
      </View>
      </ScrollView>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});


export default ViewAds;