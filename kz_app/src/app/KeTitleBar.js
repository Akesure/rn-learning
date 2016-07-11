/**
 * Created by weimeng on 16/4/25.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */


import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert,
  TouchableOpacity,
  Platform
} from 'react-native'


import { connect } from 'react-redux'

import {
  getResponsiveSize,
  PagesConfig as Pages,
  Link,
  borderColor,
  BackButton
} from "common/index"





import { navBack, navTo, switchTab } from "actions/index"



const PHONE = '400-967-7727'

const TITLE_BAR_HEIGHT = 44



const _BackToUcButton = ({dispatch}) => <NavButton onPress={() => {
  dispatch(switchTab("uc"))
  dispatch(navTo(Pages.Home, {}, true))
}}
>
    <Image source={require("./img/back-icon.png")} />
</NavButton>



const _LinkButton =  ({dispatch, route, children, params}) => <NavButton onPress={() => {
  dispatch(navTo(route, params || {}))
}}
>
    {children}
</NavButton>



const BackToUcButton = connect()(_BackToUcButton)
const LinkButton = connect()(_LinkButton)

class _TitleBar extends Component {

  constructor(){
    super()
    this.renderHome = this.renderHome.bind(this)
    this.callPhone = this.callPhone.bind(this)
  }

  renderHome(){
    const iconRight = <LinkButton route={Pages.Search} params={{sku_id:"00000044"}} >
      <Image source={require("./img/list-icon.png")} />
    </LinkButton>

    return (
      <TitleBar right={iconRight} title="刻舟求件" />
    )
  }
  
  renderInput(){
    const left = <BackButton />
    return (
      <TitleBar left={left} title="失物拍照" />
    )
  }
  
  renderMemo(){
    const left = <BackButton />
    return (
      <TitleBar left={left} title="资料补充" />
    )
  }
  
  
  renderTakePicture() {
    const left = <BackButton />
    return (
      <TitleBar left={left} title="拍照" />
    )  
  }

  callPhone() {
      Alert.alert(
        '提醒',
        '您是否要拨打'+PHONE,
        [
          {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: '确定', onPress: () =>
            {
              Linking.openURL('tel://'+PHONE).catch(err => console.error('An error occurred', err));
            },
          }
        ]
      )
  }

  render(){
    const { tab, route } = this.props

    switch (route) {
      case Pages.Home.name : 
        return this.renderHome()
      case Pages.Input.name : 
        return this.renderInput()
      case Pages.Memo.name : 
        return this.renderMemo()
      case Pages.TakePicture.name :
        return this.renderTakePicture()
    }
    
    return null
    
  }


}

class TitleBar extends Component {
  render () {
    const {left, title, right} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.leftIcon}>
          {left}
        </View>
        <View style={ [styles.textContainer, this.props.isFourFont&&styles.TwotextContainer] } >
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={ [styles.rightIcon, this.props.isFourFont&&styles.rightFontIcon]}>
          {right}
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "white",
    height : Platform.OS === 'ios' ? TITLE_BAR_HEIGHT + 20 : TITLE_BAR_HEIGHT,
    paddingTop : Platform.OS === "ios" ? 20 : 0,
    flexDirection : "row" ,
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:borderColor
  },
  leftIcon : {
    backgroundColor : "white",
    width : 50,
    alignItems:'center',
  },
  rightIcon : {
    backgroundColor : "white",
    width : 50,
    alignItems:'center',
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
  TwotextContainer : {
    flex : 1,
    marginLeft: 35,
    alignItems:'center',
  },
  titleText : {
    fontSize : getResponsiveSize(15),
  }
})


const mapStateToProps = (state) => {
  return {
    route : state.navigator.current ? state.navigator.current.name : "Home",
    tab : state.tab

  }
}


export let KeTitleBar = connect(mapStateToProps)(_TitleBar)
