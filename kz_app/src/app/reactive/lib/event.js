/**
 * 
 * ramroll on 16/7/10.
 */


let events = {
}

export const on = (name, handler) => {

  const listeners = events[name]
  if(!listeners) {
    events[name] = []
  }
  events[name].push(handler)
}


export const trigger = (name, data) => {
  const listeners = events[name]
  for(let i = 0; i < listeners.length; i++) {
    listeners[i](data)
  }

}

export const remove = (name, handler) => {
  const listeners = events[name]
  events[name] = listeners.find( v => v !== handler) 
}