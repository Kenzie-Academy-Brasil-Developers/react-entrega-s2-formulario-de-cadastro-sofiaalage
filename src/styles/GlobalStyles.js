import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-shadow: 0 0 0 0;
        box-sizing: border-box;


        :root{
            --pink: #FF577F;
            --pink-dark:#FF427F;
            --pink-negative:#59323F;
            --grey-dark:#121214;
            --grey:#212529;
            --grey-light:#343B41;
            --grey-lighter:#868E96;
            --white:#F8F9FA;
            --grenn-sucess:#3FE864;
            --pink-sucess:#E83F5B;
            

                
  ;

        }
        body{
            background-color: var(--grey-dark);
            font-family: 'Inter', sans-serif;
        }
        
        
        
    }

`

export default GlobalStyle