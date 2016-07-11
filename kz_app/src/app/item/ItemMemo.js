/**
 * Created by weimeng on 16/6/12.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */


import React, { Component } from 'react'

import {
  View
} from 'react-native'


import {
  PagesConfig,
  Form,
  BottomButton,
  BackButton,
  Title
} from 'common/index'

import meta from "./forms/memo"

import {StepBar} from "./StepBar"

import Toast from 'react-native-sk-toast'

import {connect} from 'react-redux'
import {navTo, reset} from 'actions/index'

class ItemMemo extends Component {
  
  constructor(){
    super()
    this._press = this._press.bind(this)
  }
  
  _press(){
    Toast.center("录入成功")
    this.props.dispatch(navTo(PagesConfig.Search))
  }

  render(){

    return (
      <View style={{flex : 1}}>
        <View style={{flex : 1}}>

          <StepBar step={3} />
          <Form meta={meta} />
        </View>
        <BottomButton onPress={this._press}>下一步</BottomButton>
      </View>
    )

  }
}

const __module = connect()(ItemMemo)

__module.TitleBar = {
  LeftButton : <BackButton />,
  Title : <Title>资料补充</Title>

}
module.exports = __module
