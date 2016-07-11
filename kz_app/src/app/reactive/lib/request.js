/**
 * ramroll on 16/7/10.
 */
/**
 * Created by ramroll on 16/7/9.
 */

import Toast from 'react-native-sk-toast'
import {CancelablePromise} from 'common/index'

const normalize_response = response => {
  //throw {error : {errorCode : code, errorMessage: "网络请求失败"}}
  const code = response.status
  console.log('http status code : ' , code)
  if (response.status >= 200 && response.status < 300 ) {
    return response.text() // Promise
  }
  throw {error : {errorCode : code, errorMessage: "网络请求失败"}}
}

const normalize_text = text => {
  try{
    return JSON.parse(text)
  }
  catch(ex) {
    throw { error : { errorCode : -200, errorMessage: "服务器返回数据格式不正确" } }
  }
}



const print = data => {
  console.log('print:', data)
  return data
}

const handle_error = error => {
  return { error }
}


export const request = (url) => {
  return new CancelablePromise( (resolve, reject) => {
    const promise1 = fetch(url)
      .then(normalize_response)
      .then(normalize_text)
      .catch(handle_error)
      .then( data => {
        if(data.error) {
          //Toast.show(data.error.errorMessage)
          reject(data.error)
        } else {
          resolve(data.value)
        }
      })
  })

}



