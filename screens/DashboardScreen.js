import React, { Component } from 'react';
import { Text, View, StyleSheet } from "react-native";

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <Text
          onPress={() => this.props.navigation.navigate('Welcome')}>
        Sign Out</Text>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});


export default DashboardScreen;