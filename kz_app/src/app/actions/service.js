/**
 * Created by weimeng on 16/4/18.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */


import { call_service } from "../service/service_caller"
import {navTo} from "actions/index"
import {
  PagesConfig
} from "common/index"

import Toast from 'react-native-sk-toast'
/**
 * Create an action to invoke a service.
 * e.g.
 *  this.props.dispatch( create_service(USER_LOGIN, {mobile : 18610330551, password : '123456'} ))
 *  .then(data => {
 *  })
 *
 *  or in reducer
 *  switch (action.type){
 *   ....
 *    case USER_LOGIN :
 *    return ...
   }
 *
 *
 * @param name service name
 * @param params params
 */
export function create_service(name, ...params) {

  let promise = null
  try{
    promise = call_service(name, ...params)
  } catch(ex) {
    console.error(ex)
  }

  if(!promise) {
    return
  }

  const retPromise = dispatch => {
    dispatch({
      type : name + "@Init",
      requestParams : params
    })
    const nPromise = promise.then( data => {
      dispatch({
        type : name,
        requestParams : params,
        data : data
      })
      return data
    })
    nPromise.catch( error => {
      if(error.result_code === 20000) {
        Toast.center("请登录");
        dispatch({
          type : "LOGIN_FAIL"
        })
        dispatch(navTo(PagesConfig.LoginPop))
        
        
      } 
      else if(error.result_code === - 1){
        Toast.center("网络请求错误,请稍后重试");
      }
      else {
        Toast.center(error.error_msg);
      }
    })

    return nPromise
  }
  

  return retPromise

}
