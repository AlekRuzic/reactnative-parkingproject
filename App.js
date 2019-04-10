import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
}
from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import PostAd from './components/PostAd';
import ViewAds from './components/ViewAds';
import Icon from "react-native-vector-icons/Ionicons";

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;


const DashboardTabNavigator = createBottomTabNavigator({
  "View Ads": {screen: ViewAds},
  "Post Ad": {screen: PostAd}
},
{
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: "Pin Parking"
    }
  }
});

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
}, {
  defaultNavigationOptions:({navigation})=>{
    return {
      headerLeft: (
        <Icon
         name="md-menu"
         size={30}
         style={{ paddingLeft: 10 }}
         onPress={() => { navigation.openDrawer()}}/>
      )
    }
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Account: { screen: DashboardStackNavigator },
  "Sign Out": { screen: WelcomeScreen }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);


