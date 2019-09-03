import React, { Component } from "react";
import { Rating } from "react-native-elements";
import { View, Text, StyleSheet, Image } from "react-native";
var baseUrl = "http://groomingsolutions.somee.com/Api/";

export default class ShowRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ratings: []
    };
  }
  componentDidMount() {
    // let getId = this.props.navigation.getParam("saloonId");
    let getId = 1;
    this.rating(getId);
  }

  rating(getId) {
    fetch(baseUrl + `GetRatings?id=${getId}`)
      .then(response => response.json())
      .then(responseJson => {
        let { Rating } = responseJson;
        Rating = Rating.pop();
        this.setState({
          Ratings: Rating
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    let { Ratings } = this.state;

    return (
      <View>
        <Text />
        <Text />
        <Text />
        <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={Ratings.Rating1}
          // readonly
          imageSize={20}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10 }}
          // ratingBackgroundColor=
          // ratingColor="#ff343"
          // style={{ marginTop: 0, backgroundColor: "red", flex: 1, height: 20 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyView: {
    height: "100%"
    // backgroundColor: "#cfd8dc"
  }
});
