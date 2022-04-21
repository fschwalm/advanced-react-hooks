// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const isFunction = value =>
  value &&
  (Object.prototype.toString.call(value) === '[object Function]' ||
    'function' === typeof value ||
    value instanceof Function)

function StateReducer(currentState, action = {}) {
  if (isFunction(action)) {
    return {...currentState, ...action(currentState)}
  }

  return {
    ...currentState,
    ...action,
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(StateReducer, {
    count: initialCount,
  })

  const {count} = state

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
