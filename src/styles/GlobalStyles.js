import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        min-height: 100%;
        background: #252525;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: "Roboto", sans-serif;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }
`;

export default GlobalStyles;