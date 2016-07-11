/**
 *
 * ramroll on 16/7/10.
 */

import React, { Component } from 'react'

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import {
  BackButton,
  Title,
  ProgressView
} from 'common/index'

import {connect} from 'react-redux'

import {request} from "./lib/request"
class Example4 extends Component{

  constructor(){
    super() 
    this.state = {
      data : null  
    }
  }
  
  componentDidMount(){
    this.promise = request("http://localhost:3000")
      .then(data => {
        console.log(data)
        this.setState({
          data
        })
      })
      .catch( error => {
        console.log(error)


      })
  }

  componentWillUnMount(){
    this.promise && this.promise.cancel()
  }

  render(){
    const {data} = this.state
    
    if(!data) {
      return <ProgressView style={{flex: 1}} />  
    }

    return(
      <View>

        {data.list.map(({name, title}, i ) => {
          return (
            <View key={i}>
              <Text>{name}</Text>
              <Text>{title}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}



const __module = connect()(Example4)

__module.TitleBar = {
  LeftButton : <BackButton />,
  Title : <Title>Example4</Title>

}
module.exports = __module
