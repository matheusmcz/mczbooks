import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%large; //15px
    }

    @media (max-width: 720px) {
      font-size: 87,5%; //14px
    }

    overflow: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  body, input, textarea, button {
    font-family: 'Heebo', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 769px;
    background: #FFFFFF;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    display: flex;
    background: #ffffff;
    border: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;

    right: 0;
    top: 0;
    margin: 1rem 1rem 0 0;
  }
`;
