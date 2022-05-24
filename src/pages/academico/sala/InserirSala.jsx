import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import salaValidator from '../../../validators/salaValidator';
import SalaService from '../../../services/academico/SalaService';

const InserirSala = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    function salvar(dados) {

        if (params.id) {
            SalaService.update(params.id, dados)
        } else {
            SalaService.create(dados)
            console.log(dados)
        }
        navigate('/academico/salas')
        //ok
    }

    return (
        <div>
            <h1>Inserir Salas</h1>

            <Form >
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register("nome", salaValidator.nome)} />
                    {errors.nome && <span>{errors.nome.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="capacidade">
                    <Form.Label>Capacidade: </Form.Label>
                    <Form.Control isInvalid={errors.capacidade} type="number" {...register("capacidade", salaValidator.capacidade)} />
                    {errors.capacidade && <span>{errors.capacidade.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo: </Form.Label>
                    <Form.Control isInvalid={errors.tipo} type="text" {...register("tipo", salaValidator.tipo)} />
                    {errors.tipo && <span>{errors.tipo.message}</span>}
                </Form.Group>

                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
                    <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
                </div>
            </Form>

            
        </div>
    )
}

export default InserirSala