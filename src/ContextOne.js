import * as React from 'react'

let ContextOne = React.createContext();

let initialState = {
    count: 10
}

let reducer = (state, action) => {
    switch (action.type) {
        case "reset":
          return initialState;
        case "increment":
          return { ...state, count: state.count + 1 };
        case "decrement":
          return { ...state, count: state.count - 1 };
      }
}

function ContextOneProvier(props) {
    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = {state, dispatch}

    return (
        <ContextOne.Provider value={value}>
            {props.children}
        </ContextOne.Provider>
    )

}

let ContextOneConsumer = ContextOne.Consumer

export { ContextOne, ContextOneProvier, ContextOneConsumer}