import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
  
  li {
    list-style: none;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  
  .SearchInput {
    width: 300px;
  }
  
  .SearchInput__input {
    width: 100%;
    border: 1px solid black;
    border-radius: 24px;
    padding: 10px 24px;
    font-size: 20px;
  }
  
  .Suggestion {
    position: absolute;
    font-size: 20px;
    width: 300px;
    top: 50%;
    z-index: 1;
    padding: 10px;
    border-radius: 24px;
    border: 1px solid black;
  }
  
  .Suggestion ul {
    width: 100%;
  }
  
  .Suggestion li {
    padding: 10px;
    cursor: pointer;
    width: 100%;
  }
  
  .Suggestion li:hover {
    background-color: #90cdf4;
  }
  
  .Suggestion__item--selected {
    background-color: #bee3f8;
  }
  
  .Suggestion__item--matched {
    background-color: #9ae6b4;
  }
  
  .SelectedLanguage {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: nowrap;
    width: 800px;
    height: 37.5px;
    margin-top: -100px;
    margin-bottom: 10px;
  }
  
  .SelectedLanguage li {
    display: inline-block;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
`;
