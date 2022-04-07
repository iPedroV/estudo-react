import React, { useEffect, useState } from 'react'
import {  Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ImageHoverZoom from '../../components/ImageHoverZoom'
import apiFilmes from '../../services/apiFilmes'


const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/popular?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])
    //o primeiro parâmetro é uma função anônima, dentro das chaves é o corpo da função. No array, é aonde eu vou botar variáveis, toda vez que eu mudar o valor delas, eu chamo a função

    return (
        <div>
            <h1>Filmes Populares</h1>

            <Row>
                {filmes.map(item => (
                    <Col md={3} className="mb-3">
                        <Card title={item.title}> {/* da pra ver o titulo passando o mouse em cima */}
                            
                            <Card.Img className="img-wrapper" variant="top" src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path } />
                            
                            <Card.Body>
                                <Card.Title> {item.original_title}</Card.Title>
                                <Card.Text>
                                Popularidade: {item.popularity}
                                </Card.Text>
                                <Link className="btn btn-danger"  to={'/filmes/' + item.id} variant="primary" >Detalhes</Link> {' '}
                                
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default FilmesPopulares