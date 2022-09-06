import styled from "styled-components";

export const Container = styled.div `
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
 
    .header{
        display: flex;
        justify-content: space-around;
        margin-bottom:1rem;
        margin-top: 0.5rem;
    }
   .KenzieHub{
        font-size: 1.5rem;
        font-family: 'Inter';
        color: var(--pink-dark);
   }

   .volte{
        width: 4.8rem;
        height: 1.87rem;

        background-color: var(--grey);
        border: none;
        border-radius:0.2rem;

        color: var(--white);
        font-size: 0.7rem;
   }
   .volte:hover{

        border: 0.061rem solid var(--grey);
        color: var(--grey);
        background-color: var(--white);
   }

  


    .Conta{
        font-family: 'Inter';
        color: var(--white);
        font-size: 1rem;
    }   
    .subtitulo{
        font-family: 'Inter';
        color: var(--grey-lighter);
        font-size: 0.75rem;
        font-weight: lighter ;
    }
    .formBody{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        background-color: var(--grey);
        width: 16rem;
        height: 35rem;

        border-radius:0.2rem;
       
    }     

    form{
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
        
        ;
        >h3{

        color: var(--grey-lighter);
        font-family: 'Inter';
        font-size: 0.5rem;
    }
        >input{
            width: 14.5rem;
            height: 2.4rem;

            background-color: var(--grey-light);

            border: none;
            border-radius: 0.2rem;

            color: var(--white);
            font-family: 'Inter';
            font-size: 0.82rem;
        }

        >div>button{

            width: 14.5rem;
            height: 2.4rem;
                
            background-color: var(--pink-dark);

            border:none;
            border-radius: 0.2rem;

            color: var(--white);
            font-family: 'Inter';
            font-size: 0.82rem;
            font-weight: 600;
        }
        >div>button:hover{
            background-color: var(--pink-negative);
                
        } 

}
    .select{
        width: 14.5rem;
        height: 2.4rem;

        background-color: var(--grey-light);

        border: none;
        border-radius: 0.2rem;

        color: var(--white);
        font-family: 'Inter';
        font-size: 0.6rem;
    }
    .erros{
                height: 0.01rem;
                color: var(--pink-dark);
                font-family: 'Inter';
                font-size: 0.5rem;
                font-weight: 600;
            }

`