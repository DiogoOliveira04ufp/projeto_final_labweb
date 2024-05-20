import React, { useContext } from 'react';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './login'
import { LoginContext } from './logincontext'
import Registo from './registo'
import Utilizadores from './utilizadores'
import Produtos from './produtos'

function App() 
{
  const { setIsLoggedIn } = useContext(LoginContext);
  const { isLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  console.log("Tem sessão iniciada: ", isLoggedIn);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="App">
      
      <div className="header">
        <Link to="/" id="page_title">
          <h1>Título da página</h1>
        </Link>

        {isLoggedIn ? (
          <>
            <button className="login" onClick={handleLogout}>Logout</button>
          </>
        ) : (
        <div> {/* registo/início de sessão */}
          <Link to="/login" reloadDocuments>
            <button className="login">Entrar</button>
          </Link>
          <Link to="/registo" reloadDocuments>
            <button className="login">Registar-se</button>
          </Link>
        </div>
        )}

      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div>
              <Link to="/utilizadores"><h2>Lista de utilizadores</h2></Link>
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
        <Route path="/utilizadores" element={<Utilizadores />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>

    </div> );
}

export default App;
