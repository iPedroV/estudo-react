import './App.css';
import Menu from './components/Menu';
import Cartao from './components/Cartao';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';




function App() {
  return (
    <div >

      <Menu />

      <Container>
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
      </Container>
    </div>
  );
}

export default App;
