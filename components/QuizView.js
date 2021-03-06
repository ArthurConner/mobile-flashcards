import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { connect } from "react-redux";
import { TouchableHighlight } from "react-native";
import {
  getDeck,
  setLocalNotification,
  clearLocalNotification
} from "../utils/api";

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
  card: {
    backgroundColor: "green"
  },
  correctQ: {
    height: 50,
    width: "90%",
    backgroundColor: "green",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  incorrectQ: {
    height: 50,
    width: "90%",
    backgroundColor: "red",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },

  submitText: {
    color: "white",
    textAlign: "center"
  },

  card: {
    height: 300,
    backgroundColor: "powderblue",
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20
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

class QuizView extends Component {
  state = {
    nextQ: 0,
    correctCount: 0,
    isShowingQuestion: true
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  resetQuiz() {
    this.setState({
      nextQ: 0,
      correctCount: 0,
      isShowingQuestion: true
    });
  }

  correctAnswer() {
    this.setState({
      nextQ: this.state.nextQ + 1,
      correctCount: this.state.correctCount + 1,
      isShowingQuestion: true
    });
  }

  badAnswer() {
    this.setState({ nextQ: this.state.nextQ + 1, isShowingQuestion: true });
  }

  flipDeck() {
    this.setState({ isShowingQuestion: !this.state.isShowingQuestion });
  }

  render() {
    const { item } = this.props;
    //style={styles.container}
    const questions = item["questions"];

    if (this.state.nextQ >= questions.length) {
      return (
        <View style={styles.container}>
          <Text>
            {" "}
            You got {this.state.correctCount} out of {item.questions.length}{" "}
          </Text>

          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.resetQuiz()}
          >
            <Text style={styles.submitText}>Retake</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.submit}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.submitText}>Go Back to Deck</Text>
          </TouchableHighlight>
        </View>
      );
    }

    const que = questions[this.state.nextQ];

    let text = this.state.isShowingQuestion ? que.question : que.answer;

    let be = this.state.isShowingQuestion ? "Answer" : "Back to question";
    return (
      <View style={styles.container}>
        <Text>
          {" "}
          {this.state.nextQ + 1} / {questions.length}
        </Text>
        <Text> {text} </Text>

        <TouchableHighlight
          style={styles.addCard}
          onPress={() => {
            this.flipDeck();
          }}
        >
          <Text>{be}</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.correctQ}
          onPress={() => {
            this.correctAnswer();
          }}
        >
          <Text style={styles.submitText}>Correct</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.incorrectQ}
          onPress={() => this.badAnswer()}
        >
          <Text style={styles.submitText}>Incorrect</Text>
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

export default connect(mapStateToProps)(QuizView);
