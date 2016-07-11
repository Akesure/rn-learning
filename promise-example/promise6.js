/**
 * 
 * ramroll on 16/7/10.
 */


const promise1 = new Promise((resolve, reject) => {
  resolve(1)  
})
const promise2 = new Promise( (resolve, reject) => {
  resolve(2)  
}) 

const promise3 = Promise.all([promise1, promise2])
  .then(data => {
    console.log(data)  
  })
  .catch( ex => {
    console.error(ex)  
  })

const promise4 = Promise.race([promise1, promise2])
  .then(data => {
    console.log(data)  
  })
  .catch( ex => {
    //console.error(ex)  
  })


