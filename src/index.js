import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/App.js";
import rootReducer from "./reducers/rootReducer";
import "./styles.css";

let store = createStore(rootReducer);

window.store = store;
store.subscribe(() => {
  console.log("something happened");
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
