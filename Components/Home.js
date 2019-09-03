import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import SaloonLists from "./SaloonLists";
import AboutUs from "./AboutUs";
class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={{
          flex: 1,
          // remove width and height to override fixed static size
          width: null,
          height: null,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
            // marginTop: 100
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SaloonLists")}
            style={{
              backgroundColor: "red",
              width: 100,
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white" }}>Saloons</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Home;
