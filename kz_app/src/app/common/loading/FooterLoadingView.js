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

import {
  ProgressView,
  color_text_grey
} from 'common/index'

export class FooterLoadingView extends Component {
  
  render(){
    const {loading, title} = this.props
    return <View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'center'}}>
      {loading ? <ProgressView /> : null}
      <Text style={{marginLeft : 5, color : color_text_grey}}>{title}</Text>
    </View>  
  }
}


