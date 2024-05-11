// import App from '/.App'
import './login.css';
import React from 'react';
// import { Link } from 'react-router-dom';

function Login() 
{
    return (
        <div className="login_page">

            <div className="loginbox">
                <h2 className="logintitle">Iniciar sessão</h2>
                <form>
                    <div>
                        <input type="email" id="email" name="email" placeholder='Email' required></input>
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder='Password' required></input>
                    </div>
                    <button type="submit" className='confirm'>Entrar</button>
                </form>
            </div>

        </div>
    )
}

export default Login;