

import React from 'react'
import { View } from 'react-native'
import DeckListView from './components/DeckListView'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <DeckListView />
        </View>
      </Provider>
    )
  }
}
