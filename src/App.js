import './App.css';
import Menu from './components/Menu';
//import Cartao from './components/Cartao';
//import Box from './components/Box';
//import { Alert, Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Array from './pages/Array';
import Carros from './pages/Carros';
import Objeto from './pages/Objeto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';




function App() {
  return (
    <div >

      

      <BrowserRouter>
        <Menu />
        <Container>
        <Routes>
          <Route path="/" element={<Carros/>}></Route> {/* Posso fechar das duas formas */} 
          <Route path="/carros" element={<Carros/>}></Route>
          <Route path="/array" element={<Array/>}></Route>
          <Route path="/objeto" element={<Objeto/>}></Route>

        </Routes>
        </Container>
      </BrowserRouter>


      {/* */}


      {/*     
  <Container>
        <Box title='teste1' cor='danger'>
          <p>teste1</p>
        </Box>
        <Box title='teste2' cor='success'>
          <p>teste2</p>
        </Box>
        <Row className="justify-content ps-0">
          <Col>
            <Cartao titulo="Palmeiras" src="https://i.superesportes.com.br/81WRvS0ZqVjw5kHq0bzEibTbpcs=/smart/imgsapp.mg.superesportes.com.br/app/foto_126510467054/2022/02/12/13330/20220212210407264685a.jpg" />
          </Col>
          <Col>
            <Cartao />
          </Col>
          <Col>
            <Cartao />
          </Col>
          <Col>
            <Cartao />
          </Col>

        </Row>




        <h1>Hello World</h1>

        <Button variant='outline-primary'>Salvar</Button>

        <Alert variant='danger'>
          PERIGO
        </Alert>
  </Container> */}
    </div>
  );
}

export default App;
