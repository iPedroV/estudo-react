import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDisney from '../../services/apiDisney'

const TodosPersonagens = () => {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {

        apiDisney.get('/characters').then(resultado => {
            setPersonagens(resultado.data.data)
            
        })

    }, [])
    return (
        <div>
            <h1>Personagens</h1>

            <Row>
                {personagens.map(item => (
                    <Col key={item._id} md={4} className="mb-3"> {/* O key é dentro do col IMPORTANTE */}

                        <Card className="h-100" title={item.name}> {/* da pra ver o titulo passando o mouse em cima */}

                            <Link to={'/disney/personagens/' + item._id} variant="primary" >
                                <Card.Img className="hover-zoom" variant="top" src={item.imageUrl} />
                            </Link>
                            <Card.Body>
                                <Card.Title> {item.name}</Card.Title>
                                <Card.Text>
                                    Teste: 
                                </Card.Text>
                                <Card.Text>
                                    Teste: 
                                </Card.Text>
                                 {/* d-flex justify-content-center text-center */}

                                
                            </Card.Body>


                        </Card>

                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default TodosPersonagens