import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import App from '../../App';
import { useHistory } from "react-router-dom"
import axios from 'axios';
import "./login.css"

function Login({setUser}){

    const history= useHistory()

    const submitFunction = (data) => {
        axios.post('https://kenziehub.herokuapp.com/sessions', data)
        .then((response) => {
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.user.id);
            history.push("/dashboard")
        }) 
        .catch((err) => console.log(err.response.data.message))
       }
     

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password : yup.string().required("Senha obrigatória").min(8, 'Senha tem que ter pelo menos 8 caracteres').matches("(?:([0-9a-zA-Z$*&@#])(?!\\1))", "Senha inválida"),        
      });

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema)
      })

    return(
        
        <div className='container'>
            <h1 className='titulo' >Kenzie Hub</h1>
            <div className='box'>
                <h2 className='login'>Login</h2>
                <form className="form" onSubmit={handleSubmit(submitFunction)}>
                    <h3 className='text'>Email</h3>
                    <input className='input' placeholder='Email' {...register("email")}></input>
                    {errors.email && errors.email.message}

                    <h3 className='text'>Senha</h3>    
                    <input  className='input' placeholder='Senha' {...register("password")}></input>
                    {errors.password && errors.password.message}

                    <button className='button' type="submit" >Entrar</button>
                    
                </form>
               <h4 className='littleText'>Ainda não possui uma conta?</h4>
                    <button className='buttonRegister'  onClick={() => history.push('/register')}>Cadastre-se</button>
            </div>
        </div>
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