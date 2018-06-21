import React, { Component }  from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import {  TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

class DeckListView extends Component {

    

      _onPress(x){

      }

       state = {data:[{key: 'a',title:'bar'}, {key: 'b',title:'foo'}]}

  render() {
     // const titleList = timeblah()
     //

     let {data} = state
   

    return (
      <View style={styles.container} >
        <Text>This was my start. Ella fitz. See if it works</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

  <FlatList
  data={data}
  renderItem={({item}) => <View>
    <TouchableOpacity onPress={this._onPress}>
    <Text>{item.key}</Text>
    <Text>{item.title}</Text>
    </TouchableOpacity>
    </View>
  
  }
/>
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
  )(DeckListView)