import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <Container> 
    <div> <h1>Oops!parece que você está perdido.</h1>
    <p>Quer voltar para a Home?</p>
    <Link to='/'>Home</Link>
    </div>
    </Container>
  )
}
