import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfessorService from '../../../services/academico/AlunoService'
import { FaPlus } from 'react-icons/fa'

const ListaProfessores = () => {

  const [professores, setAlunos] = useState([])

  useEffect(() => {

    setAlunos(ProfessorService.getAll())

  }, [])

  console.log(professores);
  return (
    <div>
      <h1>Professores</h1>

      <Link className='btn btn-info mb-3' to={'/academico/cadastrar-professor'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matrícula</th>
            <th>Salário</th>
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
          {professores.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.matricula}</td>
              <td>{item.salario}</td>
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

export default ListaProfessores