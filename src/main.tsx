/**
 * main.js
 *
 * entry file for the app
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as FontFaceObserver from "fontfaceobserver";
import "sanitize.css/sanitize.css";

// root app
import App from "./containers/App";

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

const MOUNT_NODE = document.getElementById("app");
const APP_NAME = "Json Resume";

ReactDOM.render(<App name={APP_NAME} />, MOUNT_NODE);
