import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import App from '../../App';
import { useHistory } from "react-router-dom"
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Container, Toast } from '../login/style';
import { toast, ToastContainer } from 'react-toastify'



function Login(){

    const {user , setUser} = useContext(UserContext)


    
    const history= useHistory()

    const submitFunction = (data) => {
        axios.post('https://kenziehub.herokuapp.com/sessions', data)
        .then((response) => {
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.user.id);
            history.push("/dashboard");

        return toast('✅ Login efetuado com sucesso', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }) 
        .catch((err) => {
            return toast(`❌ Ops! Algo deu errado. \nErro: ${err.response.data.message}`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        });
        
          
       }
     

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password : yup.string().required("Senha obrigatória").min(8, 'Senha tem que ter pelo menos 8 caracteres').matches("(?:([0-9a-zA-Z$*&@#])(?!\\1))", "Senha inválida"),        
      });

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema)
      })

    return(
        
        <Container >
            <h1>Kenzie Hub</h1>
            <div >
                <h2 >Login</h2>
                <form  onSubmit={handleSubmit(submitFunction)}>
                    <h3 >Email</h3>
                    <input  placeholder='Email' {...register("email")}></input>
                    <div className='erros'>{errors.email && errors.email.message}</div>

                    <h3 >Senha</h3>    
                    <input   placeholder='Senha' {...register("password")}></input>
                    <div className='erros'>{errors.password && errors.password.message}</div>

                    <button type="submit" >Entrar</button>
                    
                    
                </form>
               <h4 >Ainda não possui uma conta?</h4>
                    <button   onClick={() => history.push('/register')}>Cadastre-se</button>
            </div>
           
        </Container>
    )
}

export default Login





/*Novamente, crie um formulário utilizando React Hook Form e Yup
Nesse formulário serão necessários somente validações de campo obrigatório 
(tanto e e-mail, quanto em senha)
Crie um estado de carregamento (loading) na rota de login, e um estado de usuário 
(user) de forma global
Crie a função de login, realizando uma requisição na rota /sessions (POST), conforme as 
orientação da documentação da API
Crie notificação
Em caso de sucesso, armazene o data.user no estado user, o data.token e data.user.id em 
chaves diferentes no localStorage(@TOKEN, @USERID), feito isso, redirecione o usuário para o 
dashboard*/