import styled from "styled-components";

export const Container = styled.div `
    width: 100wh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background-color:  var(--grey-light );


    >div{
        width: 22.5rem;
        height: 18rem;
        background-color: var(--grey-light);
        border: none;
        border-radius: 0.2rem;
        border: 0.06rem solid var(--grey-lighter);
        
    }
    .modalHead{
        display: flex;
        justify-items: center;
        justify-content:  space-between;
        align-items: center;
        width: 100%;
        height: 15%;
        background-color: var(--grey-lighter);
        padding-left: 0.5rem;
        padding-right: 0.5rem ;
    }
    form{
        width: 100%;
        height: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        gap:0.5rem
}
    
    .title{
            font: 'Inter';
            color: var(--white);
            font-size: 0.8rem;
    }
    .close{
        background-color: var(--grey-lighter);
        color: var(--white);
        cursor: pointer;
    }
    h3{
        font: 'Inter';
        color: var(--grey-lighter);
        font-size: 0.7rem;
    }
    .input{
        width: 88%;
        height: 2.5rem;
        background-color: var(--grey-light);
        border: 0.06rem solid var(--white);
        border-radius: 0.2rem;
        color: var(--white);
        cursor: pointer;
    }
    .submit{
        width:  19.65rem;
        height: 2.5rem;
        background-color: var(--pink);
        border-radius: 0.2rem;
        color: var(--white);
        cursor:pointer;
    }
    .submit:hover{
        background-color: var(--pink-negative);
    }
   


`