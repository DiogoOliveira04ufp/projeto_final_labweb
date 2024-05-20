import React, { useState, useEffect } from 'react';
import './produtos.css';

function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            const response = await fetch('https://lwlc-proj-2024.onrender.com/products', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'wkakjbadue4.t3gfddvdsgh46.y45j5yrhedtg'
                }
            });

            if (!response.ok) 
            {
                const message = await response.text();
                throw new Error(`Erro ao obter produtos: ${message}`);
            }

            const data = await response.json();
            setProdutos(data);
        };

        fetchProdutos();
    }, []);

    return (
        <div className="products_page">
            {produtos.map(produto => (
                <div className="panel" key={produto.id}>
                    <h3>{produto.nome}</h3>
                    <p>{produto.preco}</p>
                    <img src={produto.fotoUrl} alt={produto.nome} />
                </div>
            ))}
        </div>
    );
}

export default Produtos;