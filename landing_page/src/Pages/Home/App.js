import React from 'react';
import './App.css';
import Formulario from '../../Componentes/Formulario/Formulario'
import Header from '../../Componentes/Header/Header';
import Inicio from '../Inicio/Inicio';
import Autores from '../Autores/Autores';
import Livros from '../Livros/Livros';
import Sobre from '../Sobre/Sobre'

function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <Inicio/>
      <Livros id="Livros"/>
      <Autores/>
      <Sobre/>
      </>
    </div>
  );
}

export default App;
