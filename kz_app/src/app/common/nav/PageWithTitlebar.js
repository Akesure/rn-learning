/**
 *
 * by ramroll on 16/7/8.
 */

import React, { Component } from 'react'

import {
  View,
} from "react-native"

import {
  ProgressView,
  TitleBar
} from 'common/index'

export class PageWithTitlebar extends Component{

  constructor(){
    super()
  }


  render(){
    const {renderTitleBar, loading} = this.props

    return (
      <View style={{flex : 1}}>
        {renderTitleBar()}

        {
          loading ?
            <ProgressView style={{flex : 1}} />
            :
            this.props.children
        }
      </View>
    )
  }
  
}

PageWithTitlebar.Standard = ({title, children}) => {

  const renderTitleBar = () => {
    return (
      <TitleBar.Standard title={title} />
    )
  }
  return (


    <PageWithTitlebar renderTitleBar={renderTitleBar}>
      {children}
    </PageWithTitlebar>
  )
}

