
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import { useState } from "react";
import Footer from "./components/footer/index.jsx";
import { toast, ToastContainer } from 'react-toastify'


function App() {
  const [user, setUser] = useState([]);

  return (
    <div >
      <header>
      <ToastContainer/>
        <Switch>
          <Route exact path="/">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard user={user} />
          </Route>
        </Switch>
      <Footer/>
      </header>
      
    </div>
  );
}

export default App;
