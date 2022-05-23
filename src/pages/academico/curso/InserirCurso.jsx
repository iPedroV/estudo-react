import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import CursoService from '../../../services/academico/CursoService'

const InserirCurso = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        CursoService.create(dados)
        console.log(dados)
        navigate('/academico/cursos')
        //ok
    }

    return (
        <div>
            <h1>Cadastrar Cursos</h1>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register("nome", {
                        required: 'Campo Obrigatório',
                        minLength: {
                            value: 3,
                            message: "Qtd mínima de caracteres não informado"
                        },
                        maxLength: {
                            value: 50,
                            message: "Qtd máxima de caracteres ultrapassada"
                        },
                    })} />
                    {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control type="number" {...register("duracao", {

                        minLength: {
                            value: 1,
                            message: "Qtd mínima de caracteres não informado"
                        },
                        maxLength: {
                            value: 11,
                            message: "Qtd máxima de caracteres ultrapassada"
                        },
                    })} />
                    {errors.duracao && <span className="text-danger">{errors.duracao.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text" {...register("modalidade", {
                        required: 'Campo Obrigatório',
                        maxLength: {
                            value: 1,
                            message: "Qtd máxima de caracteres ultrapassada"
                        },
                    })} />
                    {errors.modalidade && <span className="text-danger">{errors.modalidade.message}</span>}
                </Form.Group>
                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)}><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default InserirCurso