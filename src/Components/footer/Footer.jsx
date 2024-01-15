// import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../../assets/home/logo.png'
import './Footer.css'
import insta from '../../assets/home/insta.png'
import facebook from '../../assets/home/facebook.png'
import twitter from '../../assets/home/twitter.png'

export const Footer = () => {
    return (

        <div className='footer'> 
        <Container>
            <footer className="pt-4 my-md-5 pt-md-5">

                <div className="row">
                    <div className="col-12 col-md-5">
                        <img className="mb-2" src={logo} alt="" width="253px" height="44px" />
                        <p style={{ marginTop: '30px', fontWeight: '500', maxWidth: '20em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div className='social-icon'> 
                        <img className="mb-2" src= {facebook} alt="facebook"/>
                        <img className="mb-2" src= {insta} alt="instagram"/>
                        <img className="mb-2" src= {twitter} alt="twitter"/>
                        </div>
                       
                    </div>
                    <div className="col-6 col-md">
                        <h5>Informação</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="text-decoration-none" href="#">Sobre a Drip Store</a></li>
                            <li className="mb-1"><a className="text-decoration-none" href="#">Segurança</a></li>
                            <li className="mb-1"><a className="text-decoration-none" href="#">WishList</a></li>
                            <li className="mb-1"><a className="text-decoration-none" href="#">Blog</a></li>
                            <li className="mb-1"><a className="text-decoration-none" href="#">Trabalhe Conosco</a></li>
                            <li className="mb-1"><a className="text-decoration-none" href="#">Meus Pedidos</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Categorias</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="text-decoration-none" href="#">Camisetas</a></li>
                            <li className="mb-1"><a className="text-decoration-none" href="#">Calças</a></li>
                            <li className="mb-1"><a className="text-decoration-none" href="#">Bones</a></li>
                            <li className="mb-1"><a className="text-decoration-none" href="#">Headphones</a></li>
                            <li className="mb-1"><a className="text-decoration-none" href="#">Tênis</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Contatos</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="text-decoration-none" href="#">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</a></li>
                            <li className="mb-1"><a className="text-decoration-none" href="#">(85) 3051-3411</a></li>

                        </ul>
                    </div>
                </div>

            <div>
            <hr />
            <p className='pb-4 footer-bottom'>{`@${new Date().getFullYear()} Digital College`}</p>
            {/* o pb-4 coloca uma borda adicional */}
          </div>
            </footer>
        </Container>
        </div>
    )
}
