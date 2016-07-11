/**
 *
 * by ramroll on 16/6/15.
 * 
 */


import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'


import {
  NavButton,
  color_text_grey
} from 'common/index'


export const SubButton = ( {dispatch, text, onPress, inverse} ) =>  <NavButton onPress={onPress}>
  <View style={styles.container}>
    <Text style={[styles.text, {color : inverse ? 'white' : color_text_grey}]}>{text}</Text>
  </View>
</NavButton>



const styles = StyleSheet.create({
  container : {
  },
  
  text : {
    fontSize : 17,
    color : color_text_grey,
    fontWeight : "200"
    
  }
})

