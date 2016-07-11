/**
 * Created by ramroll on 16/7/9.
 */

const fetch = require('node-fetch')
/*
const a = $.ajax(url)
a.then(data => {

})
*/



const normalize_response = response => {
  throw {error : {errorCode : code, errorMessage: "网络请求失败"}}
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


function request(url) {
  return new Promise( (resolve, reject) => {
    const promise1 = fetch(url)
      .then(normalize_response)
      .then(normalize_text)
      .catch(handle_error)
      .then( data => {
        if(data.error) {
          reject(data.error)  
        } else {
          resolve(data.value)
        }  
      }) 
  })
  
}


request('http://localhost:3000')
  .then(print)
  .catch(print)
  
