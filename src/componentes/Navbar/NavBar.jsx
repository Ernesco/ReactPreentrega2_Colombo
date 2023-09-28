import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget';
import { Link, NavLink } from 'react-router-dom';
import Style from '../style/style.module.css'

const Navb = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Link to="/"><img src="https://i.postimg.cc/sfGjc7Jm/logoUma.png" alt="logo" className={Style.navlogo} /></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <NavLink className={Style.Navtext} to='/'>Inicio</NavLink>
                        <NavLink className={Style.Navtext} to='/Contacto'>Contacto</NavLink>
                        <NavLink className={Style.Navtext} to='/Nosotros'>Nosotros</NavLink>
                        <NavDropdown to="/categories" title="Categories" id="basic-nav-dropdown" active>
                            <NavDropdown.Item as={NavLink} to="/categories/electronics">Electronics</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/categories/jewelery">Jewelry</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/categories/men's clothing">Men's clothing</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/categories/women's clothing">Women's clothing</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CardWidget />
        </Navbar>
    );
}

export default Navb;