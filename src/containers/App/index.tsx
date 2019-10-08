import * as React from "react";
import GlobalStyles from "../../global-styles";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 24px;
`;

export interface AppProps {
  name: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <AppWrapper className="App">
        <h1> {this.props.name} </h1>
        <GlobalStyles />
      </AppWrapper>
    );
  }
}

export default App;
