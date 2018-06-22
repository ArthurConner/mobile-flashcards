import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { addCard } from "../actions";
import { TouchableHighlight, TextInput } from "react-native";
import { getDeck } from "../utils/api";

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
  state = { question: "", answer: "" };
  render() {
    const { item } = this.props;
    //style={styles.container}
    return (
      <View style={styles.container}>
        <Text>New Question for {item.title} </Text>
        <TextInput
          style={styles.TextInputStyle}
          onChangeText={text => this.setState({ question: text })}
          value={this.state.question}
        />
        <Text>Answer </Text>

        <TextInput
          style={styles.TextInputStyle}
          onChangeText={text => this.setState({ answer: text })}
          value={this.state.answer}
        />
        <TouchableHighlight
          style={styles.submit}
          onPress={() => {
            this.props.addCard({
              key: item.key,
              question: this.state.question,
              answer: this.state.answer
            });
            this.props.navigation.goBack();
          }}
        >
          <Text style={styles.submitText}>Save</Text>
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

function mapDispatchToProps(dispatch) {
  return {
    addCard: data => dispatch(addCard(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckView);
