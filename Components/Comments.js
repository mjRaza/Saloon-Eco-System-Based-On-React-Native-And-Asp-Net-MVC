import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView
} from "react-native";

import { Container, Content, Card, CardItem, Body } from "native-base";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Rating } from "react-native-elements";
var baseUrl = "http://groomingsolutions.somee.com/Api/";

export default class Comments extends Component {
  static navigationOptions = {
    title: "Users Review"
  };

  constructor(props) {
    super(props);
    this.state = {
      Comments: [],
      comment: ""
    };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    let getId = params.itemID;
    this.setState({
      id: getId
    });
    fetch(baseUrl + `GetComments?id=${getId}`)
      .then(response => response.json())
      .then(responseJson => {
        let { Comments } = responseJson;
        this.setState({
          Comments
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    let { Comments } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Container>
          <Content>
            {this.state.Comments.map(data => {
              return (
                <Card>
                  <CardItem>
                    <Body>
                      {data && data.User_name ? (
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                          {data.User_name}:
                        </Text>
                      ) : (
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                          Annonymous
                        </Text>
                      )}
                      <Text style={styles.Text}>{data.Comment1}</Text>
                    </Body>
                  </CardItem>
                </Card>
              );
            })}
          </Content>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyView: {
    height: "100%"
    // backgroundColor: "#cfd8dc"
  },

  Text: {
    fontSize: 18,
    // marginLeft: 10,
    color: "#546e7a"
  }
});
