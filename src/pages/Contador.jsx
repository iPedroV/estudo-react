import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Contador = () => {

    //ver no console f12 console.log(o que eu quero aqui)
    //let numero = 0;
    const [numero, setNumero] = useState(15)

    /* function somar(){
        setNumero(++numero)
        console.log(numero)
    } */

    return (
        <div>
            <h1>Contador</h1>

            <Form>
                <Form.Group className="mb-3" controlId="num">
                    <Form.Label></Form.Label>
                    <Form.Control type="number" placeholder="Digite um número" />
                    
                </Form.Group>
            </Form>

            <Button variant="dark" onClick={() => setNumero(numero - 10)}> - 10 </Button> {' '}
            <Button variant="warning" onClick={() => setNumero(numero - 5)}> - 5 </Button> {' '}
            <Button variant="danger" onClick={() => setNumero(numero - 1)}> - </Button> {' '}
            {numero} {' '}
            <Button variant="success" onClick={() => setNumero(numero + 1)}> + </Button> {' '}
            <Button variant="info" onClick={() => setNumero(numero + 5)}> + 5 </Button> {' '}
            <Button variant="primary" onClick={() => setNumero(numero + 10)}> + 10 </Button> {' '}

        </div>
    )
}

export default Contador