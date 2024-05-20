import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
    
function Login() 
{
    // const myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluX3VzZXIiLCJhZG1pbiI6InRydWUiLCJpYXQiOjE3MTYwNTg0NDgsImV4cCI6MTcxNjA2MjA0OH0.CEKc_cqDycDzQY15KdmWjkkMTH4Afqod7PPEUhX4mSY");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => 
        {
            event.preventDefault();
        
            const response = await fetch( 'https://lwlc-proj-2024.onrender.com/users/login', 
            {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            } );
        
            if (!response.ok) {
                throw new Error('Falha no login');
            }
            else
            {
                alert("Login efetuado com sucesso");
                navigate('/');
            }
        
            const data = await response.json();

            localStorage.setItem('token', data);
            
            /* console.log('Token armazenado:', localStorage.getItem('token'));
            console.log('Resposta: ', data);
            console.log(response);  */
        }

    return (
        <div className="login_page">

            <div className="loginbox">
                <h2 className="logintitle">Iniciar sessão</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" id="username" name="username" placeholder='Username' required value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    {/* <Link to="/"> */}
                        <button type="submit" className='confirm'>Entrar</button>
                    {/* </Link> */}
                </form>
            </div>
            
        </div> )
}

export default Login;