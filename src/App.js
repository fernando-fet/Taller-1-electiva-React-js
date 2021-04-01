import React from 'react'
import Home from './Componentes/Home/Home'
import Producto from './Componentes/Producto/Producto';
import Categorias from './Componentes/Categorias/Categorias';
import Roles from './Componentes/Roles';
import Contactenos from './ComponentesFet/Contactenos/Contactenos'
import Home1 from './ComponentesFet/Principal/Home1'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
  
} from "react-router-dom";

const App =()=> {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Home">
           <Home />
          </Route>
          <Route path="/Usuarios">
           <Home />
          </Route>
          <Route path="/Categorias">
            <Categorias />
          </Route>
          <Route path="/Roles">
            <Roles />
          </Route>
          <Route path="/Productos">
            <Producto />
          </Route>
          
          <Route path="/Contactenos">
            <Contactenos />
          </Route>
          <Route path="/Inicio">
            <Home1 />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
