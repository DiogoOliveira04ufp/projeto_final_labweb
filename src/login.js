import React, { useState } from 'react';
import './login.css';
    
function Login() 
{
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluX3VzZXIiLCJhZG1pbiI6InRydWUiLCJpYXQiOjE3MTYwNTg0NDgsImV4cCI6MTcxNjA2MjA0OH0.CEKc_cqDycDzQY15KdmWjkkMTH4Afqod7PPEUhX4mSY");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => 
    {
        event.preventDefault();

        const response = await fetch( 'https://lwlc-proj-2024.onrender.com/api-docs/#/', 
        {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({ email, password })
        } );

        const data = await response.json();
    }

    return (
        <div className="login_page">

            <div className="loginbox">
                <h2 className="logintitle">Iniciar sessão</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="email" id="email" name="email" placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className='confirm'>Entrar</button>
                </form>
            </div>

        </div> )
}

export default Login;