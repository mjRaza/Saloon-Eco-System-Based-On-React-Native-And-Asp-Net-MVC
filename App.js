import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import ApiScreen from "./Components/ApiScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Components/Home";
import SaloonLists from "./Components/SaloonLists";
import Details from "./Components/Details";
import ServiceDetails from "./Components/ServiceDetails";
import Comments from "./Components/Comments";
import RateUs from "./Components/RateUs";
import AboutUs from "./Components/AboutUs";

import AddComments from "./Components/AddComments";

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ApiScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: Details,
    // ApiScreen: ApiScreen,
    ServiceDetails: ServiceDetails,
    Comments: Comments,
    RateUs: RateUs,
    AddComments: AddComments,
    SaloonLists: SaloonLists,
    AboutUs: AboutUs
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#0084ff"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class AppContainers extends React.Component {
  render() {
    return <AppContainer />;
  }
}
