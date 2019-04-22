import React, { Component } from "react";

import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ImagePicker from "react-native-image-picker";

import Ads from "../Ads.json";

class PostAd extends Component {
  state = {
    image: "",
    address: "",
    description: "",
    price: "",
  };

  choosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log("response", response);
      if (response.uri) {
        this.setState({ image: response });
      }

    });
  };

  render() {
    const { image } = this.state;


    const createFormData = (image, body) => {
      const data = new FormData();

      data.append("image", {
        name: image.fileName,
        type: image.type,
        uri:
          Platform.OS === "android" ? image.uri : image.uri.replace("file://", "")
      });

      Object.keys(body).forEach(key => {
        data.append(key, body[key]);
      });

      return data;
    };
    return (
      <View style={styles.container}>
        {/* <Text style={{ textAlign: 'left', marginTop: 30, marginLeft: 40, fontSize: 24}}>Post Ad</Text> */}


        {/* Text Inputs */}
        <View
          style={styles.inputsContainer}>

          {/* Address */}
          <View>
            <TextInput
              placeholder={'Address'}
              style={styles.input}
              onChangeText={(value) => this.setState({ address: value })}
            />
            <Icon name={"ios-home"} size={24} color={'rgba(50, 50, 50, 1)'}
              style={styles.inputIcon} />
          </View>

          {/* Price */}
          <View>
            <TextInput
              placeholder={'Price'}
              style={styles.input}
              onChangeText={(value) => this.setState({ price: value })}
            />
            <Icon name={"logo-usd"} size={24} color={'rgba(50,50,50,1)'}
              style={styles.inputIcon} />
          </View>

          {/* Description */}
          <View>
            <TextInput
              placeholder={'Description'}
              style={styles.descriptionInput}
              multiline={true}
              numberOfLines={8}
              onChangeText={(value) => this.setState({ description: value })}
            />
            <Icon name={"ios-information-circle-outline"} size={24} color={'rgba(50,50,50,1)'}
              style={styles.inputIcon} />
          </View>

          {/* Add Photo Button */}
          <Text
            style={{ marginLeft: 45, color: "#00BFFF"}}
            onPress={this.choosePhoto} >
          Add Photo</Text>


          {/* Uploaded Image */}
          {image!== 0 && (
          <Image
            source={{ uri:image.uri }}
            style={styles.Image} />
          )}

          {/* Post Ad Button */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.postAdButton}
              onPress={() => {
                fetch("http://localhost:3000/createad", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data"
                  },
                  body: createFormData(image, {
                      address: this.state.address,
                      price: this.state.price,
                      description: this.state.description
                    })
                  })
                  .then(res => console.log(res))
                  .catch(err => console.log(err));
                this.props.navigation.navigate('View Ads')}
              }
            >
              <Text
                style={styles.buttonText}>Post Ad</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
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
    paddingLeft: 40,
  },
  descriptionInput: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 5,
    height: 160,
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
    marginBottom: 40
  },
  postAdButton: {
    backgroundColor: "#CD5C5C",
    width: 200,
    height: 35,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 70
  },
  buttonText: {
    color: "white",
    fontFamily: "Helvetica Neue",
    fontSize: 17
  },
  Image: {
    height: 100,
    width: 130,
    marginTop: 5,
    marginLeft: 43
  }
});

export default PostAd;
