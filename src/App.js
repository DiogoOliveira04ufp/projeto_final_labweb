import { Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Login from './login'

function App() 
{
  return (
    <div className="App">
      
      <div className="header">
        <h1>Título da página</h1>

        <div> {/* registo/início de sessão */}
          <Link to="/login">
            <button className="login">Entrar</button>
          </Link>
          <button className="login">Registar-se</button>
        </div>

      </div>

      <div>
        <h2>Lista de utilizadores</h2>
        <p>Todos os utilizadores registados na plataforma</p>
      </div>

      <div>
        <h2>Inventário</h2>
        <p>Ver a lista detalhada de produtos disponíveis</p>
      </div>

      <h2>Encomendas</h2>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
