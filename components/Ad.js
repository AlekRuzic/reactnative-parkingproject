import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

class ViewAds extends Component {
  render() {
    console.log(this.props.image);
    return (
      <View style={styles.container}>
        <View style={styles.titleDiv}>
          <Text style={styles.address}>{this.props.address}</Text>
          <Text style={styles.priceDiv}>
            <Text style={styles.price}>${this.props.price}</Text>
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1
          }}
        />

        <Text style={styles.description}>{this.props.description}</Text>

        <Image
          source={{ uri: this.props.image}}
          style={styles.adImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 30,
    backgroundColor: "#F5FCFF",
    marginBottom: 30
  },
  titleDiv: {
    flexDirection: 'row',
    marginTop: 20
  },
  address: {
    fontSize: 22,
    marginBottom: 10
  },
  priceDiv: {
    marginLeft: 'auto'
  },
  price: {
    fontSize: 25,
    color: "green",
    marginBottom: -10
  },
  description: {
    marginTop: 10
  },
  adImage: {
    height:250,
    width:280,
    marginTop: 15,
  }
});

export default ViewAds;
