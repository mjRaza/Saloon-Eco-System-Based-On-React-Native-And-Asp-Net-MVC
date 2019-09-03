import React, { Component } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import ServiceDetails from "./ServiceDetails";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Comments from "./Comments";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
  Segment,
  ListItem,
  List
} from "native-base";

import AddComments from "./AddComments";
import { TouchableOpacity } from "react-native-gesture-handler";
var baseUrl = "http://groomingsolutions.somee.com/Api/";

export default class CardImageExample extends Component {
  static navigationOptions = {
    title: "Details"
  };
  constructor(props) {
    super(props);
    this.state = {
      Ratings: []
    };
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    console.log("params", params);
    let getId = params.item.ID;
    console.log("params.item.ID", params.item.ID);
    // let getId = 1;
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

  //=========================Render Function========================
  render() {
    const { params } = this.props.navigation.state;

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require("../assets/logo.jpg")} />
                <Body>
                  {/* Yahan Saloon ka Name or Location aige */}
                  <Text style={{ fontSize: 22 }}>{params.item.SaloonName}</Text>
                  <Text note>{params.item.SaloonTown}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("../assets/images.png")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="star" />
                  <Icon active name="star" />
                  <Icon active name="star" />
                  <Icon active name="star" />
                  <Icon active name="star" />

                  {this.state.Ratings && this.state.Ratings.Rating1 ? (
                    <Text style={{ margin: 10 }}>
                      {this.state.Ratings.Rating1}
                    </Text>
                  ) : (
                    <Text style={{ margin: 10 }}> 0</Text>
                  )}
                </Button>
              </Left>
              <Body>
                <Left>
                  <Button
                    transparent
                    onPress={() =>
                      this.props.navigation.navigate("Comments", {
                        itemID: params.item.ID
                      })
                    }
                  >
                    <Icon active name="chatbubbles" />

                    <Text>Comments</Text>
                  </Button>
                </Left>
              </Body>
            </CardItem>
          </Card>
          {/* ------ */}
          <Card>
            <View style={{ margin: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Description
              </Text>
              <Text
                style={{ textAlign: "justify", color: "grey", marginTop: 10 }}
              >
                {params.item.Description}
              </Text>

              <View style={{ marginTop: 15 }}>
                {/* <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}
                >
                  Services
                </Text> */}
                <Text />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("ServiceDetails", {
                        itemID: params.item.ID
                      })
                    }
                    style={styles.btn}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontWeight: "bold",
                        marginTop: 9
                      }}
                    >
                      Services
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                      this.props.navigation.navigate("RateUs", {
                        itemID: params.item.ID
                      })
                    }
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontWeight: "bold",
                        marginTop: 9
                      }}
                    >
                      Rate Us
                    </Text>
                  </TouchableOpacity>
                  {/*                   
                  <TouchableOpacity style={styles.btn}>
                    <Text
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontWeight: "bold",
                        marginTop: 9
                      }}
                    >
                      YahanKuchDalo
                    </Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
          </Card>
          {/* ------ */}

          <Card>
            <View style={{ margin: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Contact Us
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  marginTop: 5
                }}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Ionicons name="ios-mail" size={32} color="blue" />
                  <Text style={{ margin: 3 }}>{params.item.Email}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Ionicons name="md-contacts" size={32} color="blue" />
                  <Text style={{ margin: 3 }}>{params.item.PhoneNumber}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <MaterialIcons name="location-on" size={32} color="blue" />
                  <Text style={{ margin: 3 }}>
                    {params.item.SaloonAddress}, {params.item.SaloonTown},
                    Karachi.
                  </Text>
                </View>
              </View>
            </View>
            <Button
              block
              onPress={() =>
                this.props.navigation.navigate("AddComments", {
                  itemID: params.item.ID
                })
              }
            >
              <Text>Feedback</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
    borderRadius: 25,
    height: 40,
    width: 95
  }
});
