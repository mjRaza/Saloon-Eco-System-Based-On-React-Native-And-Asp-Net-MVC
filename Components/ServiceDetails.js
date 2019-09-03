import React from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";
import { Container, Content, Card, CardItem, Body } from "native-base";

export default class ServiceDetails extends React.Component {
  static navigationOptions = {
    title: "Services"
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    console.log("params", params);
    console.log("params", params.itemID);
    const getId = params.itemID;
    var baseUrl = "http://groomingsolutions.somee.com/Api/";
    return fetch(baseUrl + `Getservices?id=${getId}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.ServicesList
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Container>
          <Content>
            {this.state.dataSource.map(data => {
              return (
                <Card>
                  <CardItem>
                    <Body>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {data.Service_Name}
                      </Text>
                      <Text>{data.Service_Description} </Text>
                      <Text>{data.Service_Price} PKR</Text>
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
