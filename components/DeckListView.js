import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity, TouchableHighlight } from "react-native";
import { getDecks } from "../utils/api";

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
    height: 40,
    width: "80%",
    backgroundColor: "lightgray",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  submitText: {
    color: "black",
    textAlign: "center"
  }
});

class DeckListView extends Component {
  state = {};

  static navigationOptions = ({ navigation }) => ({
    title: `Decks`,
    headerTitleStyle: { textAlign: "center", alignSelf: "center" },
    headerStyle: {
      backgroundColor: "white"
    }
  });

  renderSeparator() {
    return <View style={styles.separator} />;
  }

  render() {
    // const titleList = timeblah()
    //

    let { data } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.submit}
          onPress={() => this.props.navigation.navigate("NewDeckView")}
        >
          <Text style={styles.submitText}>Add Deck</Text>
        </TouchableHighlight>

        <FlatList
          data={data}
          ItemSeparatorComponent={this.renderSeparator.bind(this)}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("IndividualDeckView", {
                    entryId: item.key
                  })
                }
              >
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.email}>{item.questions.length} cards</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  // const key = timeToString()

  return getDecks({ state });
}

export default connect(mapStateToProps)(DeckListView);
