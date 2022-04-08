import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="mb-3">
                <Container>
                    <Navbar.Brand href="#carros">Inicio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/carros">Carros</Link>
                        <Link className="nav-link" to="/array">Array</Link>
                        <Link className="nav-link" to="/objeto">Objeto</Link>
                        <Link className="nav-link" to="/contador">Contador</Link>
                        <NavDropdown id="nav-dropdown-dark-example" title="Filmes" menuVariant="dark">
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/filmes/populares">Populares</Link>
                                <Link className="nav-link" to="/filmes/lancamentos">Lançamentos</Link>
                                <Link className="nav-link" to="/filmes/cartaz">Cartaz</Link>
                                <Link className="nav-link" to="/filmes/ultimoAdicionado">Último Cadastrado</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                        <Link className="nav-link" to="/filmes/detalhes">Filmes Detalhes</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu