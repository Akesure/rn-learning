/**
 *
 * Created by weimeng on 16/6/12.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */


import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

import {
  W,
  lightGrey,
  grey,
  PagesConfig,
  BackButton, 
  Title
} from "common/index"

import {connect} from 'react-redux'
import {navTo} from 'actions/index'

class _ImageUploader extends Component {

  constructor(){
    super()
    this._press = this._press.bind(this)
  }

  

  _press() {
    this.props.dispatch( navTo( PagesConfig.TakePicture ) )
  }
  render(){
    const {label, query} = this.props

    let path = null
    if(query && query.path) {
      path = query.path
    }
    return  (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._press}>
          {path ?
            <View style={styles.imageWrapper}>
              <Image style={styles.image} source={{uri : path}} />
            </View>
            :
            <View style={styles.border}>
              <Text style={styles.label}>{label}</Text>
            </View>
          }
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    marginTop : 10,
    marginBottom : 10
    
  },
  border : {
    height : W * 0.6,
    width : W - 30,
    borderWidth : 2,
    borderStyle : "dashed",
    alignItems : 'center',
    justifyContent : 'center',
    borderColor : lightGrey
  },
  imageWrapper : {
    height : W * 0.6,
    width : W - 30,
    alignItems : 'center',
    justifyContent : 'center',
  },
  image : {
    height : W * 0.6,
    width : W - 30,
  },
  label : {
    color : grey
  }
})




export let ImageUploader = connect()(_ImageUploader)
