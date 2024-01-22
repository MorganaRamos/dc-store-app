import React from 'react'
import { Container } from 'react-bootstrap'
import './Menu.css'


// const RealcePage = (props)=>{
//   const location = useLocation()
//   let active = location.pathname == props.path ? "actived" : ""
//   if (props.path =='/home' && location.pathname=='/') active = "actived"
//   return (
//       <li className="nav-item"> <Link className={`nav-link ${active}`} to={props.path}>{props.name}</Link> </li>
//   )
// }

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
