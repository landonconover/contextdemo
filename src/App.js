import { useReducer, useState } from 'react';
import './App.css';

const initialState = {count: 0}

function reducer(state, action) {
  switch (action.type) {
    case 'increment' :
      return {count: state.count + 1};
    case 'decrement' :
      return {count: state.count - 1};
    case 'reset':
      return {count: 0}
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
