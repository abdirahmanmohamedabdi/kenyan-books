import React from "react";

import { Navbar, Container } from "react-bootstrap";

import {Link} from "react-router-dom"


function Nav() {
  return (
    <div className="App">
      <header>
        <Navbar  variant="dark" size="lg" bg="dark">
          <Container>
            <Navbar.Brand href="#">Kenyan Books</Navbar.Brand>
            <Link className="navbar-brand" to="/">Home</Link>
            
            
          </Container>
        </Navbar>
      </header>
      <main></main>
    </div>
  );
}
export default Nav;