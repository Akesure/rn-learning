/**
 * ramroll on 16/7/10.
 */


// Action creator (创建)
export const plus = (number) => {
  return {
    type : "PLUS",
    number
  }
}

export const delay_plus  = (number) => {

  return (dispatch, getState, extraArgument) => {
    setTimeout( () => {
      dispatch({
        type : "PLUS" ,
        number
      })
    }, 1000)

    return 1
  }

}

// { type : "PLUS", number : 1  }
//plus(1)
