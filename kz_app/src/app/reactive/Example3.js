/**
 *
 * ramroll on 16/7/10.
 */

import React, { Component } from 'react'

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import {
  BackButton,
  Title
} from 'common/index'

import {connect} from 'react-redux'
class Example3 extends Component{

  constructor(){
    super()
  }
  _press(){

    const promise = new Promise((resolve, reject) => {
      setTimeout( () => {
        console.log("resolved")  
      }, 3000)  
    })
    this.props.dispatch(promise)
  }
  render(){
    return(
      <View>
        <Text>This is example3~</Text>
        <TouchableOpacity onPress={this._press.bind(this)}><Text>go</Text></TouchableOpacity>
      </View>
    )
  }
}



const __module = connect()(Example3)

__module.TitleBar = {
  LeftButton : <BackButton />,
  Title : <Title>Example2</Title>

}
module.exports = __module
