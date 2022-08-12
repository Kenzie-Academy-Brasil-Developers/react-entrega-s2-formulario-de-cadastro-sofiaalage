import App from "../../App"
import { useHistory } from "react-router-dom"

function Dashboard({user}){

    const history= useHistory()

     return(
        <div>
        <nav >
            <h1 h1 className='titulo' >Kenzie Hub</h1>
            <button className='buttonBack' onClick={() => history.push('/login')}>Sair</button>
        </nav>
        <header>
               <h1 className='login'>Olá {user.name}</h1>
                <h1 className='login'>{user.course_module}</h1>
        </header>
        <main>
           
               <h1 className='login'>Que pena! Estamos em desenvolvimento :(</h1> 
               <h2 className='text' >Nossa aplicação está em desenvolvimento, em breve teremos novidades.</h2> 
            
        </main>
        </div>
     )
}

export default Dashboard