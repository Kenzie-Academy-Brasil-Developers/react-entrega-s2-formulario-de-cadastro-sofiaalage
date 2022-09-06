import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { TechContext } from '../../context/techContext';
import { Container } from './style';
import {AiOutlineClose} from 'react-icons/ai'


 function AddTechModal({modalOff}){

    const {createTech, deleteTech, editTech} = useContext(TechContext)

   

    const formSchema = yup.object().shape({
        title: yup.string().required("Título obrigatório"),
        status: yup.string().required("Campo obrigatório"),
      });
    
      const {register, handleSubmit, formState: { errors }} = useForm({
          resolver: yupResolver(formSchema)
        })
    
       return(
        <Container>
            <div>
                <div className='modalHead'>
                   <h1 className='title'>Cadastrar tecnologia</h1>
                    <button className='close' onClick={modalOff}><AiOutlineClose/></button>
                    
                </div>
                
                <form  onSubmit={handleSubmit((data) => {createTech(data, modalOff)})}>
                    <h3 >Título</h3>
                    <input className='input' name="title" placeholder='Digite aqui o título' {...register("title")}/>
                    {errors.name && errors.name.message}

                    <h3 >Selecionar nível</h3>
                    <select className='input' name="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <div>
                        <button className='submit' type='submit'>Cadastrar</button>
                        
                    </div>
                </form>
            </div>
        </Container>
       )
}

export default AddTechModal