import React from 'react'
import { Container, Nav, NavDropdown } from 'react-bootstrap'

export const Menu = () => {
  return (

   <Container> 
    <div className="menu">
    <Nav>
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#link">Produtos</Nav.Link>
    <Nav.Link href="#link">Categorias</Nav.Link>
    <Nav.Link href="#link">Meus Pedidos</Nav.Link>
    </Nav>
    </div>
  </Container>
  )
}
