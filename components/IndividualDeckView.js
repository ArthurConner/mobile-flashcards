import React, { Component }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

class DeckView extends Component {

    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0,
      }

  render() {
     // const bar = timeblah()
     //style={styles.container}
    return (
      <View >
        <Text>This is an individual view</Text>
        <Text>Entry Detail - {JSON.stringify(this.props.navigation.state.params.entryId.title)}</Text>
      </View>
    );
  }
}

function mapStateToProps (state) {
   // const key = timeToString()
   const key = "foo"
    return {
      alreadyLogged: state[key] && typeof state[key].today === 'undefined'
    }
  }
  
  export default connect(
    mapStateToProps
  )(DeckView)

