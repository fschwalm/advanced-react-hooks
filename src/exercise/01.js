// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
}

function StateReducer(state, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        count: state.count + action.step,
      }

    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 3}) {
  const [state, dispatch] = React.useReducer(StateReducer, {
    count: initialCount,
  })

  const {count} = state

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispatch({type: ACTION_TYPES.INCREMENT, step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
