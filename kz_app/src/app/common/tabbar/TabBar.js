/**
 *
 * by ramroll on 16/4/20.
 * 
 */

import React, {Component} from 'react'
import {
  View,
  StyleSheet,
} from "react-native"

import  TabBarItem from "./TabBarItem"

class _TabBar extends Component{

  componentWillReceiveProps(){
  }

  renderComponent(children){
    for(let i = 0; i < children.length; i++) {
      const {selected} = children[i].props
      if(selected) {
        return children[i].props.children
      }
    }
    return null
  }

  render() {
    const {
      children, height, borderColor, color, selectedColor,
      enableTintIOS, paddingTop, paddingBottom, fontSize,
      paddingLeft, paddingRight
    } = this.props

    const N = children.length
    const iconHeight = height - paddingTop - paddingBottom - fontSize
    return (
      <View style={styles.container}>
        {/* component container */}
        <View style={styles.componentContainer}>
          {this.renderComponent(children)}
        </View>

        {/* tab items */}
        <View style={[styles.tabBarItemContainer, {height, borderColor, paddingLeft, paddingRight}]}>
          {children.map( (item, key) => {
            return <View
              key={key}
              style={[styles.tabItem, { height : height, paddingTop, paddingBottom }]}>


              {React.cloneElement(item, {...item.props,
                color,
                selectedColor,
                enableTintIOS,
                paddingTop,
                paddingBottom,
                iconHeight,
                fontSize,
                N })
              }

            </View>
          })}
        </View>
      </View>
    )
  }
}


_TabBar.defaultProps = {
  height : 50,
  borderColor : "#f2f2f2",
  color : "#7f7f7f",
  selectedColor : "blue",
  enableTintIOS : false,
  fontSize : 12
}

_TabBar.propTypes = {
  //tintColor  : React.PropTypes.string,
  //barTintColor : React.PropTypes.string,
  style : React.PropTypes.object,
  translucent : React.PropTypes.bool,
  height : React.PropTypes.number,
  borderColor : React.PropTypes.string,
  children : React.PropTypes.arrayOf(React.PropTypes.element),
  selectedColor : React.PropTypes.string,
  color : React.PropTypes.string,
  enableTintIOS : React.PropTypes.bool,
  fontSize : React.PropTypes.number
}

const styles = {
  container : {
    flex : 1,
    backgroundColor : "white"

  },
  componentContainer : {
    flex : 1,
    backgroundColor : "#f3f3f3",
    alignItems : 'center',
    justifyContent : "center"
  },
  tabItem : {
    flex : 1,
    justifyContent : "center",
    alignItems : 'center',
  },
  tabBarItemContainer : {
    flexDirection : 'row',
    alignItems : 'flex-start',
    justifyContent : "center",
    borderTopColor : "#f2f2f2",
    borderTopWidth : 1,
    paddingLeft : 0,
    paddingRight : 0
  }
}

_TabBar.Item = TabBarItem
export let TabBar = _TabBar
