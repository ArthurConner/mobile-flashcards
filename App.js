

import React from 'react'
import { View ,StatusBar } from 'react-native'
import DeckListView from './components/DeckListView'
import IndividualDeckView from './components/IndividualDeckView'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import {StackNavigator} from 'react-navigation'
import {blue, purple} from './utils/colors'
import { Constants } from 'expo'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckListView,
    title:"Decks",
  },
  IndividualDeckView : {
    screen: IndividualDeckView,
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
        
        <MainNavigator />
        </View>
      </Provider>
    )
  }
}
