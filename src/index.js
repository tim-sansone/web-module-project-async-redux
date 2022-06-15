import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import App from './components/App';
import reducer from "./state/reducer";
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk))
console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
