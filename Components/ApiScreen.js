import React from "react";
import {
  FlatList,
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Details from "./Details";

export default class ApiScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      isLoading: true
    };
  }
  //---------------------------Data Fetching
  componentDidMount() {
    return fetch("https://facebook.github.io/react-native/movies.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson.movies,
          isLoading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  //--------------------------- Fucntion
  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, marginBottom: 3, flexDirection: "row" }}>
        <TouchableOpacity
          style={{ flex: 2, flexDirection: "row" }}
          onPress={() =>
            this.props.navigation.navigate("Details", {
              item: item
            })
          }
        >
          <Image
            style={{ width: 80, height: 80, margin: 5 }}
            source={require("../assets/images.png")}
          />

          <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
            <Text style={{ fontSize: 18, color: "green", marginBottom: 15 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 16, color: "red" }}>{item.title}</Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            marginRight: 20
          }}
        >
          <TouchableOpacity>
            <Ionicons name="md-heart" size={32} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  //------------------------------ Fucntion for  just Line
  renderSection = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "black" }} />
    );
  };

  //-------------------------------------Main Render-----------------------------

  static navigationOptions = {
    title: "Saloon List"
  };

  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#330066" ani />
      </View>
    ) : (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSection}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
