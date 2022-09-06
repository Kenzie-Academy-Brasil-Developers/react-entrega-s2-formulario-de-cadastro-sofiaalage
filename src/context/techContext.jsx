import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "./userContext";
import { useHistory } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify'


export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

    const {user , setUser} = useContext(UserContext)
    
    const history= useHistory()

    let token = localStorage.getItem("token");
  
    const createTech = (data, modalOff) => {
        axios.post('https://kenziehub.herokuapp.com/users/techs ', data, {
            headers: {Authorization: `Bearer ${token}`}
          }).then((response) => {window.location.reload();
         }
          )
         
        .catch((err) => console.log(err.response.data.message))
    };

    const deleteTech = (techId) => {
        
        axios.delete('https://kenziehub.herokuapp.com/users/techs/' + techId, {
            headers: {Authorization: `Bearer ${token}`}
          }).then((response) => {window.location.reload();},
          <Alert>
          Tecnologia deletada com sucesso!
          </Alert>) 
        .catch((err) => console.log(err.response.data.message))
       
    }

    const editTech = () => {
       
    }


    return (
        <TechContext.Provider value={{ createTech, deleteTech, editTech}}>
            {children}
        </TechContext.Provider>    
    );
};


/*Prosseguindo, crie um novo contexto chamado TechContext, neste criaremos duas funcionalidades:
Uma função de criação de tecnologias, realizando uma requisição na rota /users/techs (POST)
Uma função de exclusão de tecnologias, realizando uma requisição na rota /users/techs/:tech_id (DELETE)
Ambas as funcionalidades deverão ter loading e toast de erro
OBS: ambas as rotas são privadas, por isso não esqueça de enviar o token (presente no localStorage)
 OBS 2: não esqueça, é necessário, mesmo com a requisição, atualizar o estado, para que a renderização
  aconteça instantaneamente na interface.
*/