/**
 *
 * by ramroll on 16/5/18.
 * 
 */

import React, {
  Component
} from 'react'

import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import {
  TitleBarHeight 
} from 'common/index'


export const NavButton = ({ children, onPress }) => <TouchableOpacity onPress={onPress}>
  <View style={styles.btn}>
    {children}
  </View>
</TouchableOpacity>


const styles = StyleSheet.create({
  btn: {
    alignItems : 'center',
    justifyContent : "center",
    height : 40,
    paddingLeft : 10,
    paddingRight : 10
  }
})

