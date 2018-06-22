import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { TouchableHighlight, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
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
    borderColor: "#fff",
    width: "90%"
  },
  TextInputStyle: {
    textAlign: "center",
    height: 50,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1
  },
  submitText: {
    color: "white",
    textAlign: "center"
  }
});

class DeckView extends Component {
  state = { title: "" };
  render() {
    const { item } = this.props;
    //style={styles.container}
    return (
      <View style={styles.container}>
        <Text>What is the title for your new deck </Text>
        <TextInput
          style={styles.TextInputStyle}
          onChangeText={text => this.setState({ title: text })}
          value={this.state.title}
        />

        <TouchableHighlight
          style={styles.submit}
          onPress={() => {
            this.props.addDeck({
              key: String(new Date()),
              title: this.state.title
            });
            this.props.navigation.goBack();
          }}
        >
          <Text style={styles.submitText}>Create Deck</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: data => dispatch(addDeck(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckView);
