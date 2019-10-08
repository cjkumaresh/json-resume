/**
 * main.js
 *
 * entry file for the app
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as FontFaceObserver from "fontfaceobserver";
import "sanitize.css/sanitize.css";

// root app
import App from "./containers/App";
import rootReducer from "./reducers";
import { APP_NAME } from "./constants";
import { addArticle } from "./actions";

const openSansObserver = new FontFaceObserver("Mansalva", {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(
  () => {
    document.body.classList.add("fontLoaded");
  },
  () => {
    console.log("Font not available");
  }
);

const store = createStore(rootReducer);
const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App name={APP_NAME} />
  </Provider>,
  MOUNT_NODE
);
