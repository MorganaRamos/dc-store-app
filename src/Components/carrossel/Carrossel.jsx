// import React from 'react'
import tenis from '../../assets/home/tenis.png'
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import { ButtonTemplate } from '../button/Button'
import './Carrossel.css'

export const Carrosel = () => {
  return (
    <Carousel >
       <Carousel.Item interval={1000} style={{ backgroundColor: '#F5F5F5' }}>
        <Container> 
          <Row > 
          <Col md={5} style={{ paddingTop: '3rem' }}>
            <div className='mt-5 mb-3'> 
                <p style={{color: '#f6aa1c', fontSize:'16px', fontWeight:'500'}}>Melhores ofertas personalizadas</p>
                <h1 style={{fontSize:'64px', fontWeight:'700'}}> Queima de estoque Nike 🔥</h1>
                <p style={{fontSize:'18px', paddingTop:'15px'}}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <ButtonTemplate nome={'Ver ofertas'}/>
            </div>
          </Col>

          {/* coluna direita da foto do slide*/}
          <Col>
                {/* o recurso fluid insere o elemento ao lado do texto e só funciona com o Image*/}
                <Image src={tenis} height={'110%'} fluid />
          </Col>
        
          </Row>
          </Container>
      </Carousel.Item>

   
      
    </Carousel>
  )
}
