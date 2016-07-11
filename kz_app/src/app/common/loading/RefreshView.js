/**
 * Created by cauchywei on 16/5/1.
 */

import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text
} from "react-native"
import {
  W,
  color_white,
  color_black,
  color_text_grey,
  color_black_list,
} from "common/index"
export class RefreshView extends Component {

  render() {
    const {onPress} = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <Text>点击刷新</Text>
        </TouchableOpacity>
      </View>)

  }

}

var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
})


