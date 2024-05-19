import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Login from './login'
import Registo from './registo'
import Produtos from './produtos'

function App() 
{
  return (
    <div className="App">
      
      <div className="header">
        <Link to="/" id="page_title">
          <h1>Título da página</h1>
        </Link>

        <div> {/* registo/início de sessão */}
          <Link to="/login" reloadDocuments>
            <button className="login">Entrar</button>
          </Link>
          <Link to="/registo" reloadDocuments>
            <button className="login">Registar-se</button>
          </Link>
        </div>

      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div>
              <h2>Lista de utilizadores</h2>
              <p>Todos os utilizadores registados na plataforma</p>
            </div>

            <div>
              <Link to="/produtos" reloadDocuments>
                <h2>Inventário</h2>
              </Link>
              <p>Ver a lista detalhada de produtos disponíveis</p>
            </div>

            <h2>Encomendas</h2>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/registo" element={<Registo />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>

    </div> );
}

export default App;
