import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Objeto = () => {

  const carros = [
    { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/1963_Herbie.jpg' },
    { marca: 'GM', modelo: 'Celta', cor: 'Preto', ano: 2014, foto: 'https://cdn.grupolance.com.br/batches/5e/17222/0a990dbbc7442f3b1c0f40c25ea76e25.jpg' },
    { marca: 'Toyota', modelo: 'Corola', cor: 'Prata', ano: 2016, foto: 'https://revistacarro.com.br/wp-content/uploads/2019/12/Toyota-Corolla-XEi_4.jpg' },
    { marca: 'GM', modelo: 'Corsa', cor: 'Vinho', ano: 2008, foto: 'https://i.imgur.com/yAQmw.jpg' },
    { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/1963_Herbie.jpg' },
    { marca: 'GM', modelo: 'Celta', cor: 'Preto', ano: 2014, foto: 'https://cdn.grupolance.com.br/batches/5e/17222/0a990dbbc7442f3b1c0f40c25ea76e25.jpg' },
    { marca: 'Toyota', modelo: 'Corola', cor: 'Prata', ano: 2016, foto: 'https://revistacarro.com.br/wp-content/uploads/2019/12/Toyota-Corolla-XEi_4.jpg' },
    { marca: 'GM', modelo: 'Corsa', cor: 'Vinho', ano: 2008, foto: 'https://i.imgur.com/yAQmw.jpg' },
    { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/1963_Herbie.jpg' },
    { marca: 'GM', modelo: 'Celta', cor: 'Preto', ano: 2014, foto: 'https://cdn.grupolance.com.br/batches/5e/17222/0a990dbbc7442f3b1c0f40c25ea76e25.jpg' },
    { marca: 'Toyota', modelo: 'Corola', cor: 'Prata', ano: 2016, foto: 'https://revistacarro.com.br/wp-content/uploads/2019/12/Toyota-Corolla-XEi_4.jpg' },
    { marca: 'GM', modelo: 'Corsa', cor: 'Vinho', ano: 2008, foto: 'https://i.imgur.com/yAQmw.jpg' },
    { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/1963_Herbie.jpg' },
    { marca: 'GM', modelo: 'Celta', cor: 'Preto', ano: 2014, foto: 'https://cdn.grupolance.com.br/batches/5e/17222/0a990dbbc7442f3b1c0f40c25ea76e25.jpg' },
    { marca: 'Toyota', modelo: 'Corola', cor: 'Prata', ano: 2016, foto: 'https://revistacarro.com.br/wp-content/uploads/2019/12/Toyota-Corolla-XEi_4.jpg' },
    { marca: 'GM', modelo: 'Corsa', cor: 'Vinho', ano: 2008, foto: 'https://i.imgur.com/yAQmw.jpg' },
  ]



  const carro = { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: '' }

  return (
    <div>

      <Row xs={1} md={4} className="g-4">
        {carros.map(item => (
          <div>


            <Col  >
              <Card >
                <Card.Img variant="top" src={item.foto} />
                <Card.Body>
                  <Card.Title>{item.marca} - {item.modelo}</Card.Title>
                  <Card.Text>
                    <strong>Cor:</strong>{item.cor}
                  </Card.Text>
                  <Card.Text>
                    <strong>Ano:</strong>{item.ano}
                  </Card.Text>
                  <Button variant="danger">Mais detalhes</Button>
                </Card.Body>
              </Card>
            </Col>


          </div>
        ))}
      </Row>




    </div>
  )
}

export default Objeto