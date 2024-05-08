import { Link } from 'react-router-dom';
import './App.css';
import Login from './login'

function App() 
{
  return (
    <div className="App">

      <div class="header">
        <h1>Título da página</h1>

        <div> {/* registo/início de sessão */}
          <Link to={Login}><button class="login">Entrar</button></Link>
          <button class="login">Registar-se</button>
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

    </div>
  );
}

export default App;