/**
 * ramroll on 16/7/10.
 */

import React, {Component} from 'react'

import {on, remove} from "./event"

import {getValue} from './counter'

export const connector = (name) => {
  
  return __Component => {

    class SimpleEventConnector extends Component {

      constructor() {
        super()
        this.state = {
          data: getValue()
        }

        this.__handler = ((data) => {
          this.setState({
            data
          })
        }).bind(this)
      }

      componentDidMount() {
        on(name, this.__handler)
      }

      componentWillUnmout() {

        remove(name, this.__handler)

      }

      render() {
        const {data} = this.state
        return <__Component data={data}/>
      }
    }

    return SimpleEventConnector
  }

} 
