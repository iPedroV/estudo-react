import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import semestreValidator from '../../../validators/semestreValidator';
import SemestreService from '../../../services/academico/SemestreService';

const InserirSemestre = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    function salvar(dados) {
        SemestreService.create(dados)
        console.log(dados)
        navigate('/academico/semestres')
        // ok
    }

    return (
        <div>
            <h1>Inserir Semestres</h1>

            <Form >
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register("nome", semestreValidator.nome)} />
                    {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="data_inicio">
                    <Form.Label>Data de Início: </Form.Label>
                    <Form.Control isInvalid={errors.data_inicio} type="date" {...register("data_inicio", semestreValidator.data_inicio)} />
                    {errors.data_inicio && <span className="text-danger">{errors.data_inicio.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="data_fim">
                    <Form.Label>Data de Término: </Form.Label>
                    <Form.Control isInvalid={errors.data_fim} type="date" {...register("data_fim", semestreValidator.data_fim)} />
                    {errors.data_fim && <span className="text-danger">{errors.data_fim.message}</span>}
                </Form.Group>

                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
                    <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
                </div>
            </Form>

        </div>
    )
}

export default InserirSemestre