import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Axios from "axios";
import { AirbnbRating } from "react-native-elements";
var baseUrl = "http://groomingsolutions.somee.com/Api/";

export default class InfoScreen extends Component {
  static navigationOptions = {
    title: "Rating"
  };

  ratingCompleted(rating) {
    console.log(rating);
    let { id } = this.state;
    let obj = {
      RatingCount: rating,
      Saloon_ID: id
    };
    Axios.post(baseUrl + "PostRating", obj)
      .then(response => {
        debugger;
        alert(`Thank You For Giving Us ${rating}`, JSON.stringify(response));
      })
      .catch(err => {
        debugger;
        alert("err", JSON.stringify(err));
      });
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    let getId = params.itemID;

    this.setState({
      id: getId
    });
  }

  render() {
    return (
      <View style={styles.bodyView}>
        <AirbnbRating
          showRating
          count={5}
          reviews={["Terrible", "Bad", "OK", "Good", "Amazing"]}
          defaultRating={11}
          size={50}
          onFinishRating={this.ratingCompleted.bind(this)}
        />
        <TouchableOpacity
          style={{
            marginTop: 25,
            backgroundColor: "red",
            borderRadius: 25,
            height: 40,
            width: 95
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              marginTop: 9
            }}
          >
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyView: { flex: 1, justifyContent: "center", alignItems: "center" }
});
AppRegistry.registerComponent("Info", () => Info);
