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

    

  static navigationOptions = ({ navigation }) => ({
    title: `Decks`,
     headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });
 
  render() {
     // const titleList = timeblah()
     //

     let  state = {data:[
      {
        title: 'React',
        key: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      {
        key: 'JavaScript',
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    ]
    }


     let {data} = state
   

    return (
      <View style={styles.container} >
       
  <FlatList
  data={data}
  renderItem={({item}) => <View>
   <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'IndividualDeckView',
              { entryId: item.title}
            )}
          >
    <Text>{item.title}</Text>
    <Text>{item.questions.length} cards</Text>
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