import React from 'react'
import { Card } from 'react-bootstrap'

const Cartao = (props) => {
    return (
        <Card border="dark" className="mb-3" style={{ width: '15rem', height: '17rem' }}>

            <Card.Img src="https://i.superesportes.com.br/81WRvS0ZqVjw5kHq0bzEibTbpcs=/smart/imgsapp.mg.superesportes.com.br/app/foto_126510467054/2022/02/12/13330/20220212210407264685a.jpg" />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    teste 1
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cartao