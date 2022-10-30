import React, {Component} from "react";
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import logo from "../assets/images/logo.png"
const Navigationbar = () =>{
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <img src={logo} style={{height:"50px", width:"500", backgroundColor:"black", borderRadius:"7.5px"}} alt = "logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1">Market</Nav.Link>
            <Nav.Link href="#action2">Exchange</Nav.Link>
            <Nav.Link href="#action3">Tutorial</Nav.Link>
            <Nav.Link href="#action3">Wallet</Nav.Link>
          </Nav>
            <Button variant="outline-dark">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
export default Navigationbar;