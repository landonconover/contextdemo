import { useReducer, useState, useContext } from 'react';
import './App.css';

import { ContextOne } from "./ContextOne";

function App() {

  let { state, dispatch } = useContext(ContextOne);

  let inc = () => dispatch({ type: "increment" });
  let dec = () => dispatch({ type: "decrement" });
  let reset = () => dispatch({ type: "reset" });

  return (
    <div className="App">
      Count: {state.count}
      <button onClick={reset}>Reset</button>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  );
}

export default App;
