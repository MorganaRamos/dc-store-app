// import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "./MenuBar.css";
import logocolor from "../../assets/home/logocolor.png";
import { InputSearch } from "../inputSearch/InputSearch";
import { ButtonTemplate } from "../button/Button";
import carrinho from "../../assets/home/carrinho.png"
import { Menu } from "../menu/Menu";

export const MenuBar = () => {
  return (
    <div>
      <Container>
        <Navbar>
          <Col md={12}>
            <Row>
              <Col md={2}> 
                 <img className="mb-2" src={logocolor} alt="" width="253px" height="44px"/>
              </Col>
               <Col md={6}>
                <InputSearch/>
               </Col> 
               <Col md={3}>
                <a href="/cadastro" className="cadastrese mr-2">Cadastre-se</a>
                <ButtonTemplate nome='Login' />
              </Col>
              <Col md={1} className="d-flex justify-content-end">
                <img className= "carrinho" src={carrinho}  alt=""/>
              </Col>

            </Row>
          </Col>
        </Navbar>
        <Col md={12} style={{ marginBottom: '2em' }}>
          <Menu />
        </Col>
      </Container>
    </div>
  );
};
