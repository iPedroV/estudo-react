import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import ProfessorService from '../../../services/academico/ProfessorService';
import professorValidator from '../../../validators/professorValidator';

const InserirProfessor = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    function salvar(dados) {
        ProfessorService.create(dados)
        console.log(dados)
        navigate('/academico/professores')
        // ok
    }

    return (
        <div>
            <h1>Inserir Professor</h1>

            <Form >
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register("nome", professorValidator.nome)} />
                    {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control isInvalid={errors.cpf} type="number" {...register("cpf", professorValidator.cpf)} />
                    {errors.cpf && <span className="text-danger">Campo Obrigatório</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control isInvalid={errors.matricula} type="text" {...register("matricula", professorValidator.matricula)} />
                    {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salario: </Form.Label>
                    <Form.Control isInvalid={errors.salario} type="text" {...register("salario", professorValidator.salario)} />
                    {errors.salario && <span className="text-danger">{errors.salario.message}</span>}
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register("email", professorValidator.email)} />
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>telefone: </Form.Label>
                    <Form.Control isInvalid={errors.telefone} type="text" {...register("telefone", professorValidator.telefone)} />
                    {errors.telefone && <span className="text-danger">{errors.telefone.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>Cep: </Form.Label>
                    <Form.Control isInvalid={errors.cep} type="number" {...register("cep", professorValidator.cep)} />
                    {errors.cep && <span className="text-danger">{errors.cep.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>Logradouro: </Form.Label>
                    <Form.Control isInvalid={errors.logradouro} type="text" {...register("logradouro", professorValidator.logradouro)} />
                    {errors.logradouro && <span className="text-danger">{errors.logradouro.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control isInvalid={errors.complemento} type="text" {...register("complemento", professorValidator.complemento)} />
                    {errors.complemento && <span className="text-danger">{errors.complemento.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero: </Form.Label>
                    <Form.Control isInvalid={errors.numero} type="text" {...register("numero", professorValidator.numero)} />
                    {errors.numero && <span className="text-danger">{errors.numero.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", professorValidator.bairro)} />
                    {errors.bairro && <span className="text-danger">{errors.bairro.message}</span>}
                </Form.Group>

                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
                    <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default InserirProfessor