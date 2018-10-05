import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'
import LibraryList from './components/LibraryList'

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header />
                <LibraryList />
            </View>
        </Provider>
    )
}

export default App


// yang di panggil ada 2 reducer (index) dan LibraryList untuk menampilkan list
//step 1 pindah reducers/index