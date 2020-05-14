import React from 'react';
import './style-menu.scss';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NavigateLinks = (props) => {
    return (
        <Navbar className="page-nav" expand="lg" fixed='top' variant="light" bg="light">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="">
                    <Nav.Link href="/#home">Home</Nav.Link>
                    <Nav.Link href="/#page2">Section 2</Nav.Link>
                    <Nav.Link href="/#page3">Section 3</Nav.Link>
                    <Nav.Link href="/#page4">Section 4</Nav.Link>
                    <Nav.Link href="/#page5">Section 5</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigateLinks;
NavigateLinks.prototype = {
    onSelect: PropTypes.func
}