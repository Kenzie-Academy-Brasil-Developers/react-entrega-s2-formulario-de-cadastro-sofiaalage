import { useContext } from "react";
import { TechContext } from "../../context/techContext";
import { UserContext } from "../../context/userContext";
import { Container } from "../addModal/style";


function DeleteModal({deleteModalOff, techId}){
    const {deleteTech} = useContext(TechContext)
    return(
        <Container>
            <div>
                <h1>Deseja excluir essa Tecnologia?</h1>
                <button onClick={() => {deleteTech(techId)}}>Excluir</button>
                <button onClick={deleteModalOff}>Cancelar</button>
            </div>
        </Container>
    )
    

}

export default DeleteModal 