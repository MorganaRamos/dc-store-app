import axios from 'axios';
import React, { useEffect } from 'react'


export const ProdutosAlta = () => {

    // axios é semelhante ao fetch
    const buscarProdutos = async () => {
        const response = await axios.get(
            `https://dc-store-api.onrender.com/api/produto`
        );
        console.log('produtos', response.data)
    }

    // hook usado para fazer a requisicao antes de ser carregado
    useEffect(() => {
        buscarProdutos()
    }, [])

    return (
        <div>ProdutosAlta</div>
    )
}
