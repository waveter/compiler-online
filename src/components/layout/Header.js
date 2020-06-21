import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';

export default () => {
    return (
        <Navbar toggleable="lg" type="dark" variant="info">
            <Navbar.Brand href="#">
                <h1>Online Compiler</h1>
            </Navbar.Brand>

            <Navbar.Toggle target="nav-collapse"></Navbar.Toggle>

            <Navbar.Collapse id="nav-collapse" is-nav>
                <Nav class="ml-auto">
                    <NavDropdown text="Lang" right>
                        <NavDropdown.Item href="#">EN</NavDropdown.Item>
                        <NavDropdown.Item href="#">ES</NavDropdown.Item>
                        <NavDropdown.Item href="#">RU</NavDropdown.Item>
                        <NavDropdown.Item href="#">FA</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};