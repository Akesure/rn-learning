/**
 * 
 * ramroll on 16/7/10.
 */


// Model of MVI ( Model View Intent )
// Store  
let c = 1


import {trigger} from './event'


// action  = {type : 'plus 1' }
/*
export const setValue = (c, action) => {
 return c + 1
}
*/

// F_modle  接收 Intent,更新模型
export const setValue = (value /* Intent */) => {
 trigger("counter-changed", value)
 c = value 
}

export const getValue = () => {
 return c
}
