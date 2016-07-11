/**
 * ramroll on 16/7/10.
 */


import React, {Component} from 'react'
import {

} from 'react-native'

import {
  navTo
} from 'actions/index'

import {NavButton} from "./NavButtons"

import {connect} from 'react-redux'


const _LinkButton =  ({dispatch, route, children, params}) => <NavButton onPress={() => {
  dispatch(navTo(route, params || {}))
}}
>
  {children}
</NavButton>


module.exports = connect()(_LinkButton)

