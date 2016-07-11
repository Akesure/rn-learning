/**
 * Created by weimeng on 16/6/12.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */


import React, { Component } from 'react'

import {
  View
} from 'react-native'


import {
  Form,
  BottomButton,
  BackButton,
  Title,
  PagesConfig
} from 'common/index'

import meta from "./forms/idcard"

import {StepBar} from "./StepBar"

import {connect} from 'react-redux'
import { navTo } from 'actions/index'

class ItemInput extends Component {
  
  constructor(){
    super()  
    this._next = this._next.bind(this)
  }
  
  _next(){
    this.props.dispatch(navTo(PagesConfig.Memo))  
  }
  render(){
    
    return (
      <View style={{flex : 1}}>
        <View style={{flex : 1}}>

          <StepBar step={2} />
          <Form meta={meta} />
        </View>
        <BottomButton onPress={this._next}>下一步</BottomButton> 
      </View>
    )
    
  }
}

const __module = connect()(ItemInput)

__module.TitleBar = {
  LeftButton : <BackButton />,
  Title : <Title>失物拍照</Title>

}
module.exports = __module
