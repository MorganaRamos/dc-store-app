import React from 'react'
import { Container } from 'react-bootstrap'


export const Footer = () => {
    return (
        <Container>
            <footer className="pt-4 my-md-5 pt-md-5">

                <div className="row">
                    <div className="col-12 col-md">
                        <img className="mb-2" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19" />
                        <small className="d-block mb-3 text-body-secondary">© 2017–2023</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Informação</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Sobre a Drip Store</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Segurança</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">WishList</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Blog</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Trabalhe Conosco</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Meus Pedidos</a></li>

                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Categorias</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Camisetas</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Calças</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Bones</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Headphones</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Tênis</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Contatos</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Parcerias</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Contato</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacidade</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Termos</a></li>
                        </ul>
                    </div>
                </div>


            </footer>
        </Container>
    )
}
