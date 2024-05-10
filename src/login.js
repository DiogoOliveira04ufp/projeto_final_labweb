// import App from '/.App'
import './login.css';
import React from 'react';
// import { Link } from 'react-router-dom';

function Login() 
{
    return (
        <div className="login">
            
            <div className="header">
                <h1>Título da página</h1>
            </div>

            <div className="loginbox">
                <h2>Iniciar sessão</h2>
                <form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required></input>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>

        </div>
    )
}

export default Login;