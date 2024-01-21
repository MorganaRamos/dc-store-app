import React from 'react'
import { Container } from 'react-bootstrap'
import './Menu.css'

export const Menu = () => {
  return (

   <Container> 
      <div className='menu'>
    <ul >
      <li><a href="#">Home</a></li>
      <li><a href="#">Produtos</a></li>
      <li><a href="#">Categorias</a></li>
      <li><a href="#">Meus Pedidos</a></li>
      </ul>
  </div>
  </Container>
  )
}
