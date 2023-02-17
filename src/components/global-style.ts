import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900');

  :root{
    --main-blue: #458FF6;
    --main-grey: #7D7987;
    font-size: 1px;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    padding: 0 200rem;
  }

  p{
    color: var(--main-grey);
  }

  button{
    min-width: 200rem;
    padding: 1em 2em;
    border-radius: calc(3em);
  }
`;
