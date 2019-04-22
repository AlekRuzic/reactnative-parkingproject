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
  "View Ads": {
    screen: ViewAds,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-search"
          color={tintColor}
          size={24}
        />
      )
    })},
  "Post Ad": {screen: PostAd,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-paper"
          color={tintColor}
          size={24}
        />
      )
    })
  }
},
{
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: "Pin Parking"
    }
  },
},
  {
    tabBarComponent: DashboardTabNavigator,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
        backgroundColor: '#171F33'
      },
      tabStyle: {}
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
         style={{ paddingLeft: 19 }}
         onPress={() => { navigation.openDrawer()}}/>
      )
    }
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Menu: { screen: DashboardStackNavigator },
  "Sign Out": { screen: WelcomeScreen }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Dashboard: { screen: AppDrawerNavigator },
  navigationOptions: () => {
    style: {
      backgroundColor: '#F2F2F2'
    }
  },
});

const AppContainer = createAppContainer(AppSwitchNavigator);



