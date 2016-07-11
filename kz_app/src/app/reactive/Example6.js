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


// react和redux的连接器
// 高阶函数
import { connect } from 'react-redux'

import {plus, delay_plus} from "./lib/plus1/action"
class Example6 extends Component{


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
  
  constructor(){
    super()
    this._press = this._press.bind(this)
  }

  _press(){
    // System event (on Press)
    // -> Intent (action)
    // action : +1

    //this.props.dispatch( plus(1) )
    this.props.dispatch( delay_plus(1) )
    
  }

  render(){
    return(
      <View>
        <Text>This is example1~, counter is {this.props.calculate1.c}</Text>
        <TouchableOpacity onPress={this._press}><Text>+</Text></TouchableOpacity>
      </View>
    )
  }
}

// react-redux  - connect()

// store (all )
// store = {
//      calculate : { c : 13 },
//      navigator : { __id_counter..... }
//      ...
// }
//mapStateToProps(store)
const mapStateToProps = state => {
  return {
    calculate1 : state.calculate
  }
}
let Example1 = connect(mapStateToProps)(__Example1)





const __module = Example6

__module.TitleBar = {
  LeftButton : <BackButton />,
  Title : <Title>Example6</Title>

}
module.exports = __module
