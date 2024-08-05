import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/"><img
                    src='https://www.svgrepo.com/show/215585/pizza.svg'
                    width='30'
                    height='30'
                    className='d-inline-block align-top'
                    alt='PizzaHouse-logo' /> PizzaHouse
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><Link className='links' to="/">Strona główna</Link></Nav.Link>
                        <Nav.Link><Link className='links' to="/about">O nas</Link></Nav.Link>
                        <Nav.Link><Link className='links' to="/order">Menu/Zamów</Link></Nav.Link>
                        <Nav.Link><Link className='links' to="/contact">Kontakt</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
