import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registo.css';

function Registo()
{
    /* const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "wkakjbadue4.t3gfddvdsgh46.y45j5yrhedtg"); */

    const Navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [full_name, setFull_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const is_admin = false;
    // const [is_admin, setIsAdmin] = useState(false);

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
                headers: { 
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, full_name, email, phone_number, address, password, is_admin })
            });

            if(!response.ok)
            {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            else
            {
                alert("Registo efetuado com sucesso");
                Navigate("/login")
            }

            const data = await response.json();

            /* 
            console.log(data);
            console.log(response); 
            */
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
                        <input type="text" id="address" name="address" placeholder='Morada' required value={address} onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" className="password" name="password" placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" className="password" name="password" placeholder='Confirmar Password' required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    {/* <div>
                        <input type="checkbox" id="admin" name="admin" value={is_admin} onChange={e => setIsAdmin(e.target.checked)} />
                    </div> */}
                    <button type="submit" className='confirm'>Registar</button>
                </form>
            </div>

        </div> )
}

export default Registo;