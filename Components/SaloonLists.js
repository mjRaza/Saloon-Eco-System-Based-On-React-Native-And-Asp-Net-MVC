import React from "react";
import {
  FlatList,
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchBar, Card } from "react-native-elements";

export default class SaloonLists extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, dataSource: [], search: "" };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch("http://groomingsolutions.somee.com/Api/Getsaloons")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.SaloonList
          },
          function() {
            this.arrayholder = responseJson.SaloonList;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.SaloonTown
        ? item.SaloonTown.toUpperCase()
        : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: "90%",
          backgroundColor: "#080808"
        }}
      />
    );
  };

  //--------------------------- Fucntion
  renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10, paddingTop: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() =>
              this.props.navigation.navigate("Details", {
                item: item
              })
            }
          >
            <Image
              style={{ width: null, height: 200 }}
              source={require("../assets/images.png")}
            />
            <View style={{ marginLeft: 5, marginBottom: 10 }}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 15, fontWeight: "600" }}>
                  {item.SaloonName}, {item.SaloonTown}
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  style={{ paddingRight: 5 }}
                  name="md-heart"
                  size={25}
                  color="red"
                />
                <Ionicons
                  style={{ paddingRight: 5 }}
                  name="md-heart"
                  size={25}
                  color="red"
                />
                <Ionicons
                  style={{ paddingRight: 5 }}
                  name="md-heart"
                  size={25}
                  color="red"
                />
                <Ionicons
                  style={{ paddingRight: 5 }}
                  name="md-heart"
                  size={25}
                  color="red"
                />
                <Ionicons name="md-heart" size={25} color="red" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  //------------------------------ Fucntion for  just Line

  //-------------------------------------Main Render-----------------------------

  render() {
    const { search } = this.state;

    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#330066" ani />
      </View>
    ) : (
      <View style={styles.container}>
        <View
          style={{
            paddingTop: 23
          }}
        >
          <SearchBar
            lightTheme
            round
            searchIcon={{ size: 24 }}
            onChangeText={text => this.SearchFilterFunction(text)}
            onClear={text => this.SearchFilterFunction("")}
            placeholder="Search By Area..."
            value={this.state.search}
            inputContainerStyle={{ backgroundColor: "white" }}
            containerStyle={{ backgroundColor: "#5067ff" }}
          />
        </View>

        {/* <Card>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Saloons</Text>
          </View>
        </Card> */}

        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
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
