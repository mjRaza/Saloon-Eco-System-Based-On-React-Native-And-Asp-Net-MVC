// import React, { Component } from "react";
// import {
//   AppRegistry,
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView
// } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import Axios from "axios";
// import { Rating } from "react-native-elements";
// import { Container, Content, Card, CardItem, Body } from "native-base";

// var baseUrl = "http://groomingsolutions.somee.com/Api/";

// export default class InfoScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Comments: [],
//       comment: ""
//     };
//   }

//   componentDidMount() {
//     const { params } = this.props.navigation.state;
//     let getId = params.itemID;

//     // let getId = 1;

//     this.setState({
//       id: getId
//     });
//     fetch(baseUrl + `GetComments?id=${getId}`)
//       .then(response => response.json())
//       .then(responseJson => {
//         let { Comments } = responseJson;
//         this.setState({
//           Comments
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   postComment() {
//     let { comment, id, Comments } = this.state;
//     let obj = {
//       Comment1: comment,
//       Saloon_ID: id,
//       IsActive: true
//     };
//     Axios.post(baseUrl + "PostComment", obj)
//       .then(response => {
//         let { code, message } = response.data;
//         if (code == 200) {
//           Comments.unshift({
//             Comment1: comment
//           });
//         } else {
//           alert(message);
//         }
//       })
//       .catch(error => {});
//   }
//   render() {
//     let { Comments } = this.state;
//     return (
//       <View style={styles.bodyView}>
//         <Container>
//           <Content>
//             <View
//               style={{
//                 backgroundColor: "white",
//                 paddingTop: 5,
//                 paddingBottom: 5
//               }}
//             >
//               <TextInput
//                 style={styles.textArea}
//                 underlineColorAndroid="transparent"
//                 placeholder="Type something"
//                 placeholderTextColor="grey"
//                 numberOfLines={5}
//                 multiline={true}
//                 onChangeText={comment => {
//                   this.setState({ comment });
//                 }}
//               />

//               <View style={{ justifyContent: "center", alignItems: "center" }}>
//                 <TouchableOpacity
//                   onPress={this.postComment.bind(this)}
//                   style={{
//                     backgroundColor: "#03a9f4",
//                     width: 200,
//                     height: 30,
//                     alignItems: "center",
//                     justifyContent: "center",
//                     borderRadius: 5
//                   }}
//                 >
//                   <Text style={{ textAlign: "center", color: "white" }}>
//                     Comment
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>

//             {/* <ScrollView style={{ height: "100%" }}>
//           {Comments.map((row, ind) => {
//             return (
//               <View style={styles.cardView}>
//                 <View key={ind}>
//                   <View>
//                     <Text style={styles.NameText}>Customer: </Text>
//                     <Text style={styles.Text}>{row.Comment1}</Text>
//                   </View>
//                 </View>
//               </View>
//             );
//           })}
//         </ScrollView>
//  */}

//             <Content>
//               {this.state.Comments.map(data => {
//                 return (
//                   <Card>
//                     <CardItem>
//                       <Body>
//                         <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//                           Customer:
//                         </Text>
//                         <Text style={styles.Text}>{data.Comment1}</Text>
//                       </Body>
//                     </CardItem>
//                   </Card>
//                 );
//               })}
//             </Content>
//           </Content>
//         </Container>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bodyView: {
//     height: "100%",
//     backgroundColor: "#cfd8dc"
//   },
//   cardView: {
//     backgroundColor: "white",
//     height: 70,
//     flexDirection: "row"
//   },
//   NameText: {
//     marginTop: 8,
//     fontSize: 18,
//     marginLeft: 10,
//     color: "black",
//     fontWeight: "100"
//   },
//   Text: {
//     fontSize: 15,
//     marginLeft: 10,
//     color: "#546e7a"
//   },
//   textAreaContainer: {
//     borderColor: "grey",
//     borderWidth: 1,
//     padding: 5
//   },
//   textArea: {
//     height: 100,
//     justifyContent: "flex-start",
//     backgroundColor: "white",
//     marginBottom: 5,
//     elevation: 2
//   }
// });

import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Axios from "axios";
import { Rating } from "react-native-elements";
import { Container, Content, Card, CardItem, Body } from "native-base";

var baseUrl = "http://groomingsolutions.somee.com/Api/";

export default class InfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Comments: [],
      comment: "",
      uname: ""
    };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    let getId = params.itemID;

    // let getId = 1;

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

  postComment() {
    let { comment, id, Comments, uname } = this.state;

    let obj = {
      Comment1: comment,
      Saloon_ID: id,
      IsActive: true,
      User_name: uname
    };
    Axios.post(baseUrl + "PostComment", obj)
      .then(response => {
        alert("Your Feedback Has Been Submitted.");
        let { code, message } = response.data;
        if (code == 200) {
          Comments.unshift({
            Comment1: comment
          });
        } else {
          alert(message);
        }
      })
      .catch(error => {});
  }
  render() {
    let { Comments, uname } = this.state;
    return (
      <View style={styles.bodyView}>
        <Container>
          <Content>
            <View
              style={{
                backgroundColor: "white",
                paddingTop: 5,
                paddingBottom: 5,
                margin: 5
              }}
            >
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something"
                placeholderTextColor="grey"
                numberOfLines={5}
                multiline={true}
                onChangeText={comment => {
                  this.setState({ comment });
                }}
              />

              <TextInput
                style={{
                  height: 50,
                  justifyContent: "flex-start",
                  backgroundColor: "white",
                  marginBottom: 5,
                  elevation: 2,
                  paddingLeft: 15
                }}
                underlineColorAndroid="transparent"
                placeholder="Enter Name"
                placeholderTextColor="grey"
                numberOfLines={1}
                // multiline={true}
                onChangeText={uname => {
                  this.setState({ uname });
                }}
              />

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={this.postComment.bind(this)}
                  style={{
                    backgroundColor: "#03a9f4",
                    width: 200,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5
                  }}
                >
                  <Text style={{ textAlign: "center", color: "white" }}>
                    Comment
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* <ScrollView style={{ height: "100%" }}>
          {Comments.map((row, ind) => {
            return (
              <View style={styles.cardView}>
                <View key={ind}>
                  <View>
                    <Text style={styles.NameText}>Customer: </Text>
                    <Text style={styles.Text}>{row.Comment1}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
 */}

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
          </Content>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyView: {
    height: "100%",
    backgroundColor: "#cfd8dc"
  },
  cardView: {
    backgroundColor: "white",
    height: 70,
    flexDirection: "row"
  },
  NameText: {
    marginTop: 8,
    fontSize: 18,
    marginLeft: 10,
    color: "black",
    fontWeight: "100"
  },
  Text: {
    fontSize: 15,
    marginLeft: 10,
    color: "#546e7a"
  },
  textAreaContainer: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 100,
    justifyContent: "flex-start",
    backgroundColor: "white",
    marginBottom: 5,
    elevation: 2,
    paddingLeft: 15
  }
});
