import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Hello from "./Hello";

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: 'aa',
          text: 'aa',
          completed: false
        }
      ]
    case 'EDIT_TODO':
      return [
        ...state,
        {
          id: 'bb',
          text: 'bb',
          completed: true
        }
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

let store = createStore(todoApp, applyMiddleware());
console.log(store.getState())
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch({type:'ADD_TODO'})
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/index" component={Hello} />
      </Router>
    </Provider>
  );
};
export default App;
