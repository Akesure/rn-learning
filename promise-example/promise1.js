/**
 * Created by ramroll on 16/7/9.
 */

'use strict';
let promiseCount = 0;

const testPromise = () => {
  var thisPromiseCount = ++promiseCount; // 1


  console.log('开始..')

  const actor = (resolve, reject) => {

    console.log('counter', thisPromiseCount)
    setTimeout( function() {
      reject ('error code 2000')
      //resolve(thisPromiseCount); // Success
    }, Math.random() * 2000 + 1000)
  }
  // We make a new promise:
  // we promise a numeric count of this promise,
  // starting from 1 (after waiting 3s)
  const p1 = new Promise(actor);

  p1
    .then(
      val => {
        console.log(' promise fulfilled ', val)
      }
    )
    .catch(
      reason => {
        console.log("promise rejected:", reason)
      });

}

testPromise()