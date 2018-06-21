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
    separator: {
      height: 0.5,
      width: "80%",
      alignSelf: 'center',
      backgroundColor: "#555"
    },
    h2text: {
      marginTop: 10,
      fontFamily: 'Helvetica',
      fontSize: 36,
      fontWeight: 'bold',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 2,
    },
    name: {
      fontFamily: 'Verdana',
      fontSize: 18
    },
    email: {
      color: 'gray'
    }
  });



class DeckListView extends Component {

  state = {data:[
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


  static navigationOptions = ({ navigation }) => ({
    title: `Decks`,
     headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });

    renderSeparator() {
      return <View style={styles.separator} />
    }
 
    
  render() {
     // const titleList = timeblah()
     //

     


     let {data} = this.state
   

    return (
      <View style={styles.container} >
       
  <FlatList
  data={data}
  ItemSeparatorComponent={this.renderSeparator.bind(this)}

  renderItem={({item}) => <View>
   <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'IndividualDeckView',
              { entryId: item}
            )}
          >
    <Text style={styles.name}>{item.title}</Text>
    <Text style={styles.email} >{item.questions.length} cards</Text>
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
