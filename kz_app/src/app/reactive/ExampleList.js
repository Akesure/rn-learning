/**
 *
 * ramroll on 16/7/10.
 */

import React, { Component } from 'react'

import {
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import {connect} from 'react-redux'

import {
  PagesConfig,
  
} from 'common/index'

import {
  navTo
} from 'actions/index'
class ExampleList extends Component{

  render(){
    return(
      <ScrollView>
        <ExampleRoute no="1" />
        <ExampleRoute no="2" />
        <ExampleRoute no="3" />
        <ExampleRoute no="4" />
        <ExampleRoute no="5" />
        <ExampleRoute no="6" />
      </ScrollView>
    )
  }
}

const _ExampleRoute = ({no, dispatch}) => <TouchableOpacity onPress={() => {
  dispatch( navTo(PagesConfig['Example' + no]) )  
}}>
  <Text>{"Example" + no}</Text>
</TouchableOpacity>

let ExampleRoute = connect()(_ExampleRoute)


module.exports = connect()(ExampleList)
