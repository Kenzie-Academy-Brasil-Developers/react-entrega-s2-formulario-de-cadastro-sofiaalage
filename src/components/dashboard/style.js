import styled from "styled-components";
import 'animate.css';

export const Container = styled.div `
  > nav {
    display: flex;
    justify-content: space-around;
    margin-bottom:1rem;
    margin-top: 0.5rem;

 
    >h1{
      font-family: 'Inter';
      color: var(--pink-dark);
    }
    >button{
        width: 4.8rem;
      height: 1.87rem;

      background-color: var(--grey);
      border: none;
      border-radius:0.2rem;

      color: var(--white);
      font-size: 0.7rem;

      cursor:pointer;
    }
    >button:hover{
    border: 0.061rem solid var(--grey);
    color: var(--grey);
    background-color: var(--white);
    }

  }
  header{
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-bottom:1rem;
    margin-top: 0.5rem;

    border-top: 0.061rem solid var(--grey);
    border-bottom: 0.061rem solid var(--grey);

    height: 5rem;

    >h1{
      font-family: 'Inter';
      color: var(--white);
      font-size: 1.2rem;
    
  }
  .modulo{
      font-family: 'Inter';
      color: var(--grey-lighter);
      font-size: 0.7rem;
    
  }

  
  }

  main{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .Tech{
     font-family: 'Inter';
      color: var(--white);
      font-size: 1.1rem;
  }
  .buttonTech{
    font-size: 2.5rem;
    background-color: var(--grey-dark);
    color: var(--grey-lighter);
    cursor: pointer;
  }
  .main-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 60% ;
    height: 2rem;
  }
  .main-body{
    display: flex;
    flex-direction: column;
    border-radius: 0.1rem;
    width: 60%;
    min-height: 27rem ;
    max-height:27rem;
    background-color: var(--grey-light);
    align-items: center;
    justify-content: center;
    overflow-y: auto;

    
  }

  .Tech-div{
    width:90% ;
    min-height: 4rem;
    background-color: var(--grey-dark);
    border-radius: 0.4rem;
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: space-between;
  ;
  }
  .tech-name{
    font-family: 'Inter';
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--white);
    margin-left:0.5rem ;
    margin-right:0.5rem 
  }
  .status-name{
    font-family: 'Inter';
    font-weight: 600;
    font-size: 0.6rem;
    color: var(--grey-lighter);
    margin-left:0.5rem ;
    margin-right:0.5rem 
  }
  .tech-button{
    background-color: var(--grey-dark);
    color: var(--grey-lighter);
    font-size: 1rem;
    margin-left:0.5rem ;
    margin-right:0.5rem; 
    cursor: pointer;
  }
  .divTwo-Tech{
    display: flex;
  }

  .buttonadicionar{
    display: flex;
    font-size: 4rem;
    align-items: center;
    justify-content: center;
    font-family:'inter';
    border: none;
    background-color: var(--grey-light);
    color: var(--white);
    font-weight: 600;
    cursor: pointer;

    animation: zoomIn; 
     animation-duration: 1s;
  }
`