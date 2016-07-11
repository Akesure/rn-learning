/**
 *
 * by ramroll on 16/6/12.
 * 
 *
 * 导航栏返回按钮
 */


import React, {Component} from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'

import {
  NavButton,
  color_white,
  color_titlebar,
  color_titlebar_text_black
} from 'common/index'

import { navBack } from 'actions/index'

import {connect} from 'react-redux'

import closeIcon from './icon-close.png'
import backIcon from './icon-nav-back.png'
import whiteBackIcon from "./icon-back-white.png"
import closeIconWhite from "./icon-close-white.png"

const _BackButton = ({dispatch, pop, inverse, onPress}) => {

  const i_back = inverse ? whiteBackIcon : backIcon
  const i_close = inverse ? closeIconWhite : closeIcon
  const color = inverse ? color_white : color_titlebar_text_black
  return (
    <NavButton onPress={() => onPress || dispatch(navBack())}>
      {
        pop ?
          <View style={styles.container}>
            <Image style={styles.img} source={ i_close }/>
          </View>

          :
          <View style={styles.container}>
            <Image style={styles.img} source={ i_back }/>
            <Text style={[styles.text, {color}]}>返回</Text>
          </View>
      }
    </NavButton>
  )
}

const styles = StyleSheet.create({

  container : {
    flexDirection : "row",
  },
  text: {
    marginLeft: 4
  }
})

export const BackButton = connect()(_BackButton)
