import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../index.css';

const Menu = () => {
    return (
        <div>
            <Navbar variant="dark" className="mb-3">
                <Container>
                    <Navbar.Brand href="#carros">Inicio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/carros">Carros</Link>
                        <Link className="nav-link" to="/array">Array</Link>
                        <Link className="nav-link" to="/objeto">Objeto</Link>
                        <Link className="nav-link" to="/contador">Contador</Link>
                        <Link className="nav-link" to="/disney/personagens">Disney</Link>
                        <Link className="nav-link" to="/got">GOT</Link>
                        <NavDropdown id="nav-dropdown-dark" title="Filmes" menuVariant="dark">
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/filmes/populares">Populares</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/filmes/lancamentos">Lançamentos</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/filmes/cartaz">Cartaz</Link>                               
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/filmes/ultimoAdicionado">Último Cadastrado</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown id="nav-dropdown-dark" title="Séries" menuVariant="dark">
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/series/populares">Populares</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/series/no-ar">No Ar</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/series/estrelando-hoje">Estrelando Hoje</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown id="nav-dropdown-dark" title="Acadêmico" menuVariant="dark">
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/academico/cadastrar-curso">Cadastrar Curso</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/academico/cadastrar-disciplina">Cadastrar Disciplina</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/academico/cadastrar-professor">Cadastrar Professor</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/academico/cadastrar-aluno">Cadastrar Aluno</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/academico/cadastrar-sala">Cadastrar Sala</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/academico/cadastrar-semestre">Cadastrar Semestre</Link>
                            </NavDropdown.Item>
                           
                        </NavDropdown>
                        
                        <Link className="nav-link" to="/ator">Ator detalhes</Link>
                        {/*<Link className="nav-link" to="/filmes/detalhes">Filmes Detalhes</Link>*/}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu