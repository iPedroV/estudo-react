import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiRick from '../../services/apiRick'

const FilmesCartaz = () => {

    const [epi, setEpi] = useState([])

    useEffect(() => {

        apiRick.get('/character').then(resultado => {
            setEpi(resultado.data.results)
        })

    }, [])

    return (
        <div>
            <h1>Personagens</h1>

            <Row>
                {epi.map(item => (
                    <Col key={item.id} md={4} className="mb-3"> {/* O key é dentro do col IMPORTANTE */}

                        <Card className="h-100" title={item.name}> {/* da pra ver o titulo passando o mouse em cima */}

                            <Link to={'/personagem/' + item.id} variant="primary" >
                                <Card.Img className="hover-zoom" variant="top" src={item.image} />
                            </Link>
                            <Card.Body>
                                <Card.Title> {item.original_title}</Card.Title>
                                <Card.Text>
                                    Status: {item.status}
                                </Card.Text>
                                <Card.Text>
                                    Localização: {item.location.name}
                                </Card.Text>
                                 {/* d-flex justify-content-center text-center */}

                                
                            </Card.Body>


                        </Card>

                    </Col>
                ))}
            </Row>

        </div >
    )
}

export default FilmesCartaz