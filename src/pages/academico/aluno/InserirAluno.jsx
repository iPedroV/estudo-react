import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import alunoValidator from '../../../validators/alunoValidator';
import AlunoService from '../../../services/academico/AlunoService';
import { mask } from 'remask';

const InserirAluno = () => {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    function salvar(dados) {

        if (params.id) {
            AlunoService.update(params.id, dados)
          } else{
            AlunoService.create(dados)
        console.log(dados)
          }
        navigate('/academico/alunos')
        //ok
    }

    function handleChange(event){
        const mascara = event.target.getAttribute('mask')
        setValue(event.target.name, mask(event.target.value, mascara))
    }

    return (
        <div>
            <h1>Inserir Aluno</h1>

            <Form >
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register("nome", alunoValidator.nome)} />
                    {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control isInvalid={errors.cpf} type="text" {...register("cpf", alunoValidator.cpf)} 
                    mask="999.999.999-99" onChange={handleChange} />
                    
                    {errors.cpf && <span className="text-danger">Campo Obrigatório</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control isInvalid={errors.matricula} type="text" {...register("matricula", alunoValidator.matricula)} />
                    {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="email" {...register("email", alunoValidator.email)} />
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>telefone: </Form.Label>
                    <Form.Control isInvalid={errors.telefone} type="text" {...register("telefone", alunoValidator.telefone)} />
                    {errors.telefone && <span className="text-danger">{errors.telefone.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>Cep: </Form.Label>
                    <Form.Control isInvalid={errors.cep} type="number" {...register("cep", alunoValidator.cep)} />
                    {errors.cep && <span className="text-danger">{errors.cep.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>Logradouro: </Form.Label>
                    <Form.Control isInvalid={errors.logradouro} type="text" {...register("logradouro", alunoValidator.logradouro)} />
                    {errors.logradouro && <span className="text-danger">{errors.logradouro.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control isInvalid={errors.complemento} type="text" {...register("complemento", alunoValidator.complemento)} />
                    {errors.complemento && <span className="text-danger">{errors.complemento.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero: </Form.Label>
                    <Form.Control isInvalid={errors.numero} type="text" {...register("numero", alunoValidator.numero)} />
                    {errors.numero && <span className="text-danger">{errors.numero.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", alunoValidator.bairro)} />
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

export default InserirAluno