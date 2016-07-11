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

export class RefreshableScroller extends Component {


  constructor(){
    super()

    this.state = {
      scrollY : 0,
      loading : false
    }

    this._scroll = this._scroll.bind(this)
    this.renderIndicator = this.renderIndicator.bind(this)
  }
  _scroll(event) {
    const scrollY = event.nativeEvent.contentInset.top + event.nativeEvent.contentOffset.y
    
    if(scrollY < 0) {
      this.setState({
        release : false,
        scrollY
      })
    } else {
       this.setState({
        release : true,
         scrollY
      })
    }
  }

  renderIndicator(){
    const {loading, scrollY} = this.state
    
    if(loading) {
      return <Text>正在加载数据...</Text>
    }
    
    if(scrollY < -40) {
      return <Text>松开加载数据</Text>
    }
    else if(scrollY < 0) {
      return <Text>下拉加载数据</Text>
    }
    
    
  }
  render () {
    const { children, ...others } = this.props

    console.log(others)
    return (
        <ScrollView
          onScroll={this._scroll}
          scrollEventThrottle={16}
          {...others}
        >
          {this.renderIndicator()}
          {children}
        </ScrollView>
    )
  }

}


const LoadingPanel = ({text}) => <View style={{flex : 1, justifyContent : 'center', alignItems : 'center', flexDirection : 'row'}}>

  

</View>

