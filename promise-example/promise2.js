/**
 * 
 * Created by ramroll on 16/7/9.
 */


const fetch = require('node-fetch')

const promise = fetch('http://localhost:3000')

promise.then(response => {
  console.log(response)  
}).catch(error => {
  console.error(error)
})
