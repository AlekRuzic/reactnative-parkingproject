import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class WelcomeScreen extends Component {

  render() {
    return (
        <ImageBackground
          source={require('../assets/images/background1.jpg')}
          style={styles.container}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/images/pinparkingLogo.png')}
              style={styles.logoImage} />
          </View>

          {/* Text Inputs */}
          <View
            style={styles.inputsContainer}>

            {/* Username */}
            <View>
              <TextInput
                placeholder={'Username'}
                style={styles.input}
              />
              <Icon name={"ios-person"} size={28} color={'rgba(50, 50, 50, 1)'}
                style={styles.inputIcon} />
            </View>

            {/* Password */}
            <View>
              <TextInput
                placeholder={'Password'}
                style={styles.input}
                secureTextEntry={true}
              />
              <Icon name={"ios-lock"} size={28} color={'rgba(50,50,50,1)'}
                style={styles.inputIcon} />
            </View>
          </View>

          {/* Login Button */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.props.navigation.navigate('Dashboard')}
            >
              <Text
                style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  },
  logoContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  logoImage: {
    width: 300,
    marginTop: 10,
    resizeMode: 'contain',
  },
  inputsContainer: {
    flex: 2,
    justifyContent: "flex-start",
    marginTop: 40
  },
  input: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 5,
    height: 45,
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 6,
    color: "rgba(20, 20, 20, 0.9)",
    paddingLeft: 40
  },
  inputIcon: {
    position: "absolute",
    top: 5,
    left: 37,
    marginLeft: 10,
    paddingLeft: 5
  },
  buttonsContainer: {
    flex: 10,
    justifyContent: "flex-start",
  },
  loginButton: {
    backgroundColor: "#007BFF",
    width: 75,
    height: 35,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 'auto',
    marginRight: 40,
    marginTop: 5
  },
  signUpText: {

  },
  buttonText: {
    color: "white",
    fontFamily: "Helvetica Neue",
    fontSize: 17
  }
});

export default WelcomeScreen;