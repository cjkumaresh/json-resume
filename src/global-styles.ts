import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
    height: 100%;
    width: 100%;
    line-height: 1;
}

body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

body.fontLoaded {
    font-family: 'Mansalva', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}`;

export default GlobalStyles;
