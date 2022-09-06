import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import App from '../../App';
import { useHistory } from "react-router-dom"
import axios from 'axios';
import { Container } from './style';
import { toast } from 'react-toastify';



function Register(){

  const history= useHistory()

  const submitFunction = (data) => {
   axios.post('https://kenziehub.herokuapp.com/users', data)
   .then((response) =>{ history.push("/login"); 
    return toast(
      '✅ Cadastro realizado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    )}) 
   .catch((err) => console.log(err.response.data.message));
      return toast('❌ Ops! Algo deu errado', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }


  
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password : yup.string().required("Senha obrigatória").min(8, 'Senha tem que ter pelo menos 8 caracteres').matches("(?:([0-9a-zA-Z$*&@#])(?!\\1))", "Senha inválida"),
    confirmPassword : yup.string().oneOf([yup.ref('password'), null],'As senhas devem ser iguais'),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module:yup.string().required("Campo obrigatório")
  });

  const {register, handleSubmit, formState: { errors }} = useForm({
      resolver: yupResolver(formSchema)
    })

   return(

    <Container>
       <div >
      <div className='header'>
        <h1 className='KenzieHub'>Kenzie Hub</h1>
        <button className='volte'  onClick={() => history.push('/login')} >Voltar</button>
      </div>
    
    
      <div className='formBody' >
      
      <h1 className='Conta' >Crie sua conta</h1>
      <h4 className='subtitulo'>Rápido e grátis, vamos nessa</h4>
      <form  onSubmit={handleSubmit(submitFunction)}>

        <h3  >Nome</h3>
        <input   placeholder='Digite aqui seu nome' {...register("name")}/>
        <div className='erros'>{errors.name && errors.name.message}</div>
       
        
        <h3 >Email</h3>
        <input   placeholder='Digite aqui seu email'  {...register("email")}></input>
        <div className='erros'>{errors.email && errors.email.message}</div>

        <h3 >Senha</h3>
        <input   placeholder='Digite aqui sua senha'  {...register("password")}></input>
        <div className='erros'>{errors.password && errors.password.message}</div>

        <h3 >Confirmar Senha</h3>
        <input   placeholder='Digite novamente sua senha'  {...register("confirmPassword")}></input>
        <div className='erros'>{errors.confirmPassword && errors.confirmPassword.message}</div>

        <h3 >Bio</h3>
        <input   placeholder='Fale sobre você'  {...register("bio")}></input>
        <div className='erros'>{errors.faleSobreVoce && errors.faleSobreVoce.message}</div>

        <h3 >Contato</h3>
        <input   placeholder='Opção de contato' {...register("contact")}></input>
        <div className='erros'>{errors.contato && errors.contato.message}</div>

        <h3 >Selecionar Módulo</h3>
        <select  className='select' name="modulo" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
          <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
          
        </select>
        <div>
          <button  type='submit'>Cadastrar</button>
        
        </div>
        
      </form>

      </div>
        
      
    </div>
    

    </Container>
   
   )
}

  
  export default Register;