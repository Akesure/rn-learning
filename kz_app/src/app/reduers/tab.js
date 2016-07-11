/**
 * Created by weimeng on 16/4/20.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */


//const initialState = 'purchase'

const initialState = 'home'
export const tab = (state = initialState, action) => {
  if(action.type === "SWITCH_TAB") {
    return action.tab
  }
  return state
}