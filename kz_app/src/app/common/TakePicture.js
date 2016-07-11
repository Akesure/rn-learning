/**
 * Created by weimeng on 16/6/18.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */

import React, { Component } from 'react'

import {

  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CameraRoll
} from 'react-native'


import {
  W,
  H,
  TitleBarHeight,
  BackButton,
  Title
  
} from 'common/index'

import {navBack} from 'actions/index'

import Camera from 'react-native-camera'

import {connect} from 'react-redux'
class TakePicture extends Component {

  constructor(){
    super()

    this._press = this._press.bind(this)
  }

  componentDidMount(){
  }
  _press(){


    this.camera.capture()
      .then(data => {
        this.props.dispatch( navBack(data) )
      })
  }
  render(){

    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureAudio={false}
          captureTarget={Camera.constants.CaptureTarget.disk}
        >
          <View style={styles.capture}>
            <TouchableOpacity onPress={this._press}>
              <Text style={styles.captureText}>拍照</Text>
            </TouchableOpacity>
          </View>
        </Camera>

        <View style={styles.box} />
      </View>
    )
  }
}

const h = H - TitleBarHeight

const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: H, 
    width: W,
  },

  box : {
    position : 'absolute',
    top : (h - W * 0.6) / 2 ,
    width : W - 30,
    left : 15,
    height : W * 0.6,
    borderWidth : 2,
    borderStyle : "dashed",
    borderColor : "rgba(100, 100, 100, 0.5)",
    backgroundColor : "rgba(0, 0, 0, 0)"
  },
  capture: {
    flex: 0,
    backgroundColor: 'rgba(250, 250, 250, 0.8)',
    borderRadius: 35,
    padding: 10,
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width : 70,
    height : 70
  },
  captureText : {
    color: '#000',
  }
  
})


const __module = connect()(TakePicture)

__module.TitleBar = {
  LeftButton : <BackButton />,
  Title : <Title>失物拍照</Title>

}
module.exports = __module
