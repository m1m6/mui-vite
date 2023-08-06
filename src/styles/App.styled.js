// globalStyles.js
import { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: 16px;
        text-align: left;
        background-color: ${({ theme }) => theme.palette.background.default};
        min-height:100vh;
        color: ${({ theme }) => theme.palette.text.primary};
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        color: ${({ theme }) => theme.palette.text.primary};
    }
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
    }

    ol,ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;

export const Bounce = keyframes`
    0% {
        transform:         translateY(0px) translateX(-50%)
    }
    50% {
        transform:         translateY(5px) translateX(-50%)
    }
    100% {
        transform:         translateY(0px) translateX(-50%)
    }
`;

export const Scale = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`
