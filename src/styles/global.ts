import { createGlobalStyle } from "styled-components";


export const GlobalStyles =  createGlobalStyle`

:root{
  --green-light: #00DF5E;
  --white: #f9f9f9;
  --gray: #828282;
  --gray-200: #333333;
  --gray-400: #212121;
  --dark: #171717;
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body, html, #__next {
  font-family: 'DM Sans', sans-serif;
  width: 100%;
  height: 100%;
  background-color: var(--dark);
  color: var(--white);
}

h1,h2,h3,h4 {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

p{
  color: var(--gray);
  font-size: 18px;
}

button {
  color: inherit;
  cursor: pointer;
}


`