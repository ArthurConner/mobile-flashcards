import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { Button, TouchableHighlight } from "react-native";
import { getDeck } from "../utils/api";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  separator: {
    height: 0.5,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#555"
  },
  h2text: {
    marginTop: 10,
    fontFamily: "Helvetica",
    fontSize: 36,
    fontWeight: "bold"
  },
  flatview: {
    justifyContent: "center",
    paddingTop: 30,
    borderRadius: 2
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18
  },
  email: {
    color: "gray"
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  submitText: {
    color: "white",
    textAlign: "center"
  },

  addCard: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    overflow: "hidden"
  }
});

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Deck`,
    headerTitleStyle: { textAlign: "center", alignSelf: "center" },
    headerStyle: {
      backgroundColor: "white"
    }
  });

  render() {
    const { item } = this.props; //this.props.navigation.state.params.entryId;
    //style={styles.container}
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.email}>{item.questions.length} cards</Text>

        <TouchableHighlight
          style={styles.addCard}
          onPress={() => {
            console.log("clicked on new question");
            this.props.navigation.navigate("NewQuestionView", {
              entryId: item.key
            });
          }}
        >
          <Text>Add Card</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.submit}
          onPress={() =>
            this.props.navigation.navigate("QuizView", { entryId: item.key })
          }
        >
          <Text style={styles.submitText}>Take Quiz</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state, ownprops) {
  const item = getDeck({
    state: state,
    id: ownprops.navigation.state.params.entryId
  });

  return {
    item
  };
}

export default connect(mapStateToProps)(DeckView);
