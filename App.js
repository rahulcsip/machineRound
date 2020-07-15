import React, { Component } from 'react'
import { Text, StyleSheet, View ,StatusBar} from 'react-native'
import SignIn from './src/screen/SignIn'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}> 
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#266E7C" translucent = {true}/>
      
      <SignIn/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
