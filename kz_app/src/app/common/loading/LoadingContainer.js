import React, {Component} from 'react'
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableHighlight
} from 'react-native';


import  {
  ProgressView
} from 'common/index'

export class LoadingContainer extends Component {
  
  render() {
      
    const { loading, children } = this.props
    
    if(loading) {
      return <ProgressView />
    }
    
    return children
  }

}


