import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import App from '../../App';
import { useHistory } from "react-router-dom"
import axios from 'axios';



function Register(){

  const history= useHistory()

  const submitFunction = (data) => {
   axios.post('https://kenziehub.herokuapp.com/users', data)
   .then((response) => history.push("/login")) 
   .catch((err) => console.log(err.response.data.message))
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
    <div className='container'>
      <div>
        <h1 h1 className='titulo'>Kenzie Hub</h1>
        <button className='buttonBack' onClick={() => history.push('/login')} >Voltar</button>
      </div>
    
    
      <div className='boxTwo'>
      
      <h1 className='login' >Crie sua conta</h1>
      <h4 className='littleText'>Rápido e grátis, vamos nessa</h4>
      <form className="form" onSubmit={handleSubmit(submitFunction)}>

        <h3 className='text'>Nome</h3>
        <input  className='input' placeholder='Digite aqui seu nome' {...register("name")}/>
        {errors.name && errors.name.message}
        
        <h3 className='text'>Email</h3>
        <input  className='input'  placeholder='Digite aqui seu email'  {...register("email")}></input>
        {errors.email && errors.email.message}

        <h3 className='text'>Senha</h3>
        <input  className='input' placeholder='Digite aqui sua senha'  {...register("password")}></input>
        {errors.password && errors.password.message}

        <h3 className='text'>Confirmar Senha</h3>
        <input  className='input' placeholder='Digite novamente sua senha'  {...register("confirmPassword")}></input>
        {errors.confirmPassword && errors.confirmPassword.message}

        <h3 className='text'>Bio</h3>
        <input  className='input' placeholder='Fale sobre você'  {...register("bio")}></input>
        {errors.faleSobreVoce && errors.faleSobreVoce.message}

        <h3 className='text'>Contato</h3>
        <input  className='input' placeholder='Opção de contato' {...register("contact")}></input>
        {errors.contato && errors.contato.message}

        <h3 className='text'>Selecionar Módulo</h3>
        <select  className='input' name="modulo" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
          <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
          
        </select>
        <div>
          <button className='buttonRegister' type='submit'>Cadastrar</button>
        
        </div>
        
      </form>

      </div>
        
      
    </div>
    

   )
}

  
  export default Register;