import * as React from "react";
import GlobalStyles from "../../global-styles";

import "./App.css";

export interface AppProps {
  name: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="App">
        <h1> {this.props.name} </h1>
        <GlobalStyles />
      </div>
    );
  }
}

export default App;
