/**
 *
 * ramroll on 16/7/10.
 *
 */

const initialState = { c : 0 }

// state - model - store
// action : intent  
export const calculate =  (state = initialState, action) => {
  switch (action.type) {
    case "PLUS" :  
      return {c : state.c + action.number }
  }
  return state
}
