/**
 * by ramroll on 16/4/20.
 * 
 */


import React, {Component} from 'react'
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native"
import { getResponsiveSize } from "common/index"

const W = Dimensions.get("window").width

class TabBarItem extends Component{
  shouldComponentUpdate(nextProp){
    return true
  }
  _press(evt) {
    const press = this.props.onPress
    if(press){
      // In semantics this redundant requestAnimationFrame() makes tabbar
      // performance well in Android .... I think there is something wrong
      // in the design of react android ...
      requestAnimationFrame( () => {
        press(evt)
      })
    }
  }

  render(){
    const {
      title,
      icon,
      selected,
      selectedIcon,
      paddingTop,
      paddingBottom,
      iconHeight,
      selectedColor,
      color,
      fontSize,
      N
    } = this.props

    const widthOfTab = W / N
    return (
      <TouchableWithoutFeedback
        style={[styles.container]}
        onPress={this._press.bind(this)}>
        <View style={[styles.innerContainer, {width : widthOfTab}]}>
          <View style={[styles.iconContainer, {height : iconHeight}]}>
            <Image style={styles.image} resizeMode="cover" source={selected ? selectedIcon :  icon} />
          </View>
          <Text style={[styles.text, {color : selected ? selectedColor : color, fontSize}]}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

TabBarItem.defaultProps = {
  iconHeight : 12
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems : 'center'
  },
  iconContainer : {
    alignItems : 'center',
    justifyContent : 'center',
    flex : 1,
  },
  innerContainer: {
    alignItems : 'center',
  },
  image : {
    width : 20,
    height : 20 
  },
  text : {
    fontSize : 12
  }
})

module.exports = TabBarItem
