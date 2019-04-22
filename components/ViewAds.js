import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Ad from '../components/Ad';
import Ads from '../Ads.json';

class ViewAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ads: []
    };
  }

  // Fetch ads
  componentDidMount() {
    return fetch('http://localhost:3000')
      .then((ads) => ads.json())
      .then((adsJSON) => {
        console.log(adsJSON);
        console.log(this.state);
        this.setState({
          isLoading: false,
          ads: adsJSON
        }, function () {
        console.log(this.state)
      })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        {this.state.ads.map(function(ad, i) {
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