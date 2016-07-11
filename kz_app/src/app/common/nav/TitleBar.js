/**
 * by ramroll on 16/6/14.
 * 
 */


import React, { Component } from 'react'
export {BackButton} from "./BackButton"
export {SubButton} from "./SubButton"
export let LinkButton = require("./LinkButton")
export {NavButton} from "./NavButtons"

import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Navigator
} from 'react-native'

import {
  TITLE_BAR_HEIGHT,
  color_titlebar,
  color_red,
  color_white,
  color_light_grey,
  color_divider
} from "common/index"





export let Title = ({children}) => <View style={{height : 40, alignItems : 'center', justifyContent : 'center'}}><Text>{children}</Text></View>
//TitleBar.Standard = ({title}) => <TitleBar left={<TitleBar.BackButton />} title={title} />

const styles = StyleSheet.create({

  leftIcon : {
    position : 'absolute',
    left : 0,
  },
  rightIcon : {
    alignItems:'center',
    position : 'absolute',
    right : 0
  },
  rightFontIcon : {
    backgroundColor : "white",
    width : 85,
    alignItems:'center',
  },
  textContainer : {
    flex : 1,
    alignItems:'center',
  },
  titleText : {
    fontSize : 18,
  }
})
