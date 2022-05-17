import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AlunoService from '../../../services/academico/AlunoService'
import { FaPlus } from 'react-icons/fa'

const ListaAlunos = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {

        setAlunos(AlunoService.getAll())

    }, [])

    console.log(alunos);

    return (
        <div>
            <h1>Disciplinas</h1>

            <Link className='btn btn-info mb-3' to={'/academico/cadastrar-aluno'}><FaPlus /> Novo</Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Matrícula</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Complemento</th>
                        <th>Número</th>
                        <th>Bairro</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((item, i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.matricula}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{item.cep}</td>
                            <td>{item.logradouro}</td>
                            <td>{item.complemento}</td>
                            <td>{item.numero}</td>
                            <td>{item.bairro}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    )
}

export default ListaAlunos