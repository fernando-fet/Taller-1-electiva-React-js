import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './index.css';
//import App from './App';
//import Navbar1 from './Componentes/Menu/Navbar1';
import App from './App';
//import Navbar1 from './Componentes/Menu/Navbar1';
//import LayaudElectiva from './Componentes/LayaudElectiva';
import Layaudfet from './ComponentesFet/Layaudfet';

ReactDOM.render(
  <>
    <Layaudfet />
    <App />
    </>
    ,
  document.getElementById('root')
);


// <LayaudElectiva />