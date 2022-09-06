import styled from "styled-components"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = styled(ToastContainer)`
            .toastify-color-light{
               color: #fff;
            } 
            .toastify-text-color-light{
              color:  #E83F5B; }
            .toastify-color-progress-light {
                linear-gradient:(
                to right,
                #F8F9FA,
                #FF577F,
                #FF427F,
                #E83F5B,
                #121214,)}

  
 `


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
   
    >h1{
        font-family: 'Inter';
        color: var(--pink-dark);

   }
    >div{ 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        background-color: var(--grey);
        width: 16rem;
        height: 23rem;

        border-radius:0.2rem;
        
        >h2{
            color: var(--white);
            font-family: 'Inter';
            font-size: 0.9rem;
        }
        >form{
            
            height: 60%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            
             >h3 {
                
                color: var(--white);
                font-family: 'Inter';
                font-size: 0.5rem;

            }
            >input{
                width: 14.5rem;
                height: 2.4rem;

                background-color: var(--grey-light);

                border: 0.061rem solid var(--white);
                border-radius: 0.2rem;

                color: var(--white);
                font-family: 'Inter';
                font-size: 0.82rem;

            }
            >button{
                
                width: 14.5rem;
                height: 2.4rem;
                
                background-color: var(--pink-dark);

                border:none;
                border-radius: 0.2rem;

                color: var(--white);
                font-family: 'Inter';
                font-size: 0.82rem;
                font-weight: 600;
                cursor: pointer;
             }
             >button:hover{
                background-color: var(--pink-negative);
                
            } 
        }
        >h4{
            color: var(--grey-lighter);
            font-family: 'Inter';
            font-size: 0.5rem;

           
        }
        >button{
                width: 14.5rem;
                height: 2.4rem;
                
                background-color: var(--grey-lighter);

                border:none;
                border-radius: 0.2rem;

                color: var(--white);
                font-family: 'Inter';
                font-size: 0.82rem;
                font-weight: 600;
                cursor: pointer;
            }
        >button:hover{
            background-color: var(--grey-light);
        }
            .erros{
                height: 0.01rem;
                color: var(--pink-dark);
                font-family: 'Inter';
                font-size: 0.5rem;
                font-weight: 600;
            }
    }
`