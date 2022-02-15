import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducers/store/store";

import App from "./App";

export const store = createStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
