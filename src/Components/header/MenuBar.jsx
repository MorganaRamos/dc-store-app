// import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "./MenuBar.css";
import logocolor from "../../assets/home/logocolor.png";
import { InputSearch } from "../inputSearch/InputSearch";

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
                <ButtonTemplate nome='Entrar' />
              </Col>
               

            </Row>
          </Col>
        </Navbar>
      </Container>
    </div>
  );
};
