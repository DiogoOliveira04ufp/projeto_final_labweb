import React, { useState } from 'react';
import './registo.css';

function Registo()
{
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluX3VzZXIiLCJhZG1pbiI6InRydWUiLCJpYXQiOjE3MTYwNTg0NDgsImV4cCI6MTcxNjA2MjA0OH0.CEKc_cqDycDzQY15KdmWjkkMTH4Afqod7PPEUhX4mSY");

    const [username, setUsername] = useState("");
    const [full_name, setFull_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        //verificar se as senhas correspondem
        if (password !== confirmPassword) 
        {
            alert("As senhas não correspondem");
            return;
        }

        try
        {
            const response = await fetch('https://lwlc-proj-2024.onrender.com/users', {
                method: 'POST',
                headers: myHeaders,
                authorization: 'wkakjbadue4.t3gfddvdsgh46.y45j5yrhedtg',
                body: JSON.stringify({ username, email, password })
            });

            if(!response.ok)
            {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            console.log(data);
            console.log(response);
        }
        catch (error)
        {
            console.error("An error occurred while fetching the data.", error);
        }
    }

    return(
        <div className="registry_page">

            <div className="registrybox">
                <h2>Registo</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" id="username" name="username" placeholder='Nome de utilizador' required value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" id="fullname" name="fullname" placeholder='Nome completo' required value={full_name} onChange={e => setFull_name(e.target.value)} />
                    </div>
                    <div>
                        <input type="email" id="email" name="email" placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input type="number" id="phone" name="phone" placeholder='Telefone' required value={phone_number} onChange={e => setPhone(e.target.value)} /> 
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder='Confirmar Password' required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type="submit" className='confirm'>Registar</button>
                </form>
            </div>

        </div> )
}

export default Registo;