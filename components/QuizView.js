import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { connect } from "react-redux";
import { TouchableHighlight } from "react-native";

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
    const item = this.props.navigation.state.params.entryId;
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
          style={styles.addCard}
          onPress={() => {
            this.correctAnswer();
          }}
        >
          <Text>Correct</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.submit}
          onPress={() => this.badAnswer()}
        >
          <Text style={styles.submitText}>Incorrect</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state) {
  // const key = timeToString()
  const key = "foo";
  return {
    alreadyLogged: state[key] && typeof state[key].today === "undefined"
  };
}

export default connect(mapStateToProps)(QuizView);
