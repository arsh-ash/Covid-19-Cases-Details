import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import { Provider } from 'react-redux';
import{BrowserRouter} from "react-router-dom"
import storeCreater from './store.js';

let store=storeCreater()
console.log("my Store=",store.getState())

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


