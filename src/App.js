import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import { useState } from "react";
import './App.css'

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="body">
      <header>
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
      </header>
      <footer>
        <h4 className='littleText' >Copyright © 2022 Kenzie Hub todos direitos reservados.</h4>
      </footer>
    </div>
  );
}

export default App;
