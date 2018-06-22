import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { addCard } from "../actions";
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
  render() {
    const { item } = this.props;
    //style={styles.container}
    return (
      <View style={styles.container}>
        <Text>New Question for {item.title} </Text>
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

function mapDispatchToProps(dispatch) {
  return {
    addCard: data => dispatch(addCard(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckView);
