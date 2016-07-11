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

import {setValue, getValue} from "./lib/counter"
import {on, remove} from './lib/event'
import {connector} from "./lib/connector"
class Example5 extends Component{

  render(){
    return(
      <View>
        <Example1 />
        <Example1 />
      </View>
    )
  }
}

class __Example1 extends Component{
  

  _press(){
    // System event (on Press)
    // -> Intent (action)
    // action : +1
    setValue(getValue() + 1)
  }

  render(){
    return(
      <View>
        <Text>This is example1~, counter is {this.props.data}</Text>
        <TouchableOpacity onPress={this._press}><Text>+</Text></TouchableOpacity>
      </View>
    )
  }
}

// react-redux  - connect()
let Example1 = connector('counter-changed')(__Example1)





const __module = Example5

__module.TitleBar = {
  LeftButton : <BackButton />,
  Title : <Title>Example5</Title>

}
module.exports = __module
