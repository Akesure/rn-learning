/**
 * Created by weimeng on 16/2/18.
 */
import React, {Component} from 'react'
import {
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  Navigator,
  Text,
  Platform
} from 'react-native';

import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

import { Provider } from 'react-redux';
import {configureStore, getStore} from "./store/configureStore"
import { connect } from "react-redux"

import {
  lightGrey,
  PickerPop,
  PagesConfig,
  ProgressView,
  W,
  H,
  TitleBarHeight
} from "common/index"

import {create_service} from "actions/service"
import { setInitial } from "actions/index"
import {KeTitleBar} from "./KeTitleBar"

import {ReduxNavigatorProvider} from "react-native-redux-navigator"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      store : null
    }
  }

  componentDidMount() {
    configureStore( () => {
      const store = getStore()
      this.setState({
        store : getStore(),
        initialRoute : PagesConfig.initial
      })
    })
  }

  _renderScene(route, query){
    if(route === null) {
      return null
    }
    let Comp = route.Component
    return(
      <View style={{flex : 1, backgroundColor : 'white'}}>
        {Comp.TitleBar ? <View style={{width : W, height : TitleBarHeight }} /> : null}
        <Comp query={query} />
      </View>
    )
  }

  _configScene(route) {
    if(route === null) {
      return null
    }
    if(Platform.OS === 'android') {
      return Navigator.SceneConfigs.FadeAndroid
    }
    return Navigator.SceneConfigs.FloatFromRight
  }


  _routeMapper(){
    return {
      LeftButton: (route, navigator, index, navState) => {
        console.log(route)
        return route.Component.TitleBar && route.Component.TitleBar.LeftButton
      },
      RightButton: (route, navigator, index, navState) => {
        return route.Component.TitleBar && route.Component.TitleBar.RightButton
      },
      Title: (route, navigator, index, navState) => {
        return route.Component.TitleBar && route.Component.TitleBar.Title
      }
    }
  }
  _renderNavBar(){

    return (

      <Navigator.NavigationBar
        routeMapper={this._routeMapper()}
        style={{backgroundColor: 'white', borderBottomWidth : StyleSheet.hairlineWidth, borderColor : lightGrey}}
      />
    )
  }

  render() {

    const {store, initialRoute} = this.state
    if(!store) {
      return <View style={{flex : 1, width : W, height : H}}>
        <ProgressView />
      </View>
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar
            backgroundColor="rgba(0,0,0,0.2)"
            style={styles.statusBar}
          />

          <ReduxNavigatorProvider
            initialRoute={initialRoute}
            renderScene={this._renderScene}
            configScene={this._configScene}
            navigationBar={this._renderNavBar()}
          />
        </View>
      </Provider>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : lightGrey,
  },
});



module.exports = App
