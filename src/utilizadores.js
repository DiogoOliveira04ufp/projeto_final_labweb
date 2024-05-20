import React, { useState, useEffect } from 'react';

function Utilizadores() 
{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://lwlc-proj-2024.onrender.com/users', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'authorization': 'wkakjbadue4.t3gfddvdsgh46.y45j5yrhedtg'
                }
            });

            if (!response.ok) 
            {
                const message = await response.text();
                throw new Error(`Erro ao obter utilizadores: ${message}`);
            }

            const data = await response.json();
            setUsers(data);
        };

        fetchData();
    }, []);

    return (

        <div>

            <h1>Lista de Utilizadores</h1>

            {users.map(user => (
            <div key={user.username}>
                <h2>{user.full_name}</h2>
                <p>{user.email}</p>
                <p>{user.phone_number}</p>
                <p>{user.address}</p>
                <p>{user.is_admin}</p>
            </div>
            ))}

        </div>

  );
}

export default Utilizadores;