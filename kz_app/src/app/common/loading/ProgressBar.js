/**
 * Created by yyt on 16/5/31.
 * 
 */
'use strict'
import React, {Component} from 'react'
import {
  Platform,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  StyleSheet
} from 'react-native'

export class ProgressBar extends Component {
  render() {
    if (Platform.OS === 'ios') {
      return (
        <ActivityIndicatorIOS color="white" style={styles.view}/>
      )
    } else {
      return (
        <ProgressBarAndroid color="white" style={styles.view} styleAttr={"Small"}/>
      )
    }
  }
}
const styles = StyleSheet.create({
  view: {
    height: 40
  }
})
