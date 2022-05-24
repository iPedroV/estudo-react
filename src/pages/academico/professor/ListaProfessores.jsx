import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProfessorService from '../../../services/academico/ProfessorService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const ListaProfessores = () => {

  const params = useParams()
  const navigate = useNavigate()
  const [professores, setProfessores] = useState([])
  const { handleSubmit, setValue } = useForm();


  useEffect(() => {

    if (params.id) {
      const professor = ProfessorService.get(params.id)

      for (let campo in professor) {
        setValue(campo, professor[campo])
      }
    }
    setProfessores(ProfessorService.getAll())

  }, [])

  function apagar(id) {

    Swal.fire({
      title: 'Tem certeza??',
      text: 'Esta ação é irreversível!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exclua!'
    }).then((result) => {
      if (result.isConfirmed) {
        ProfessorService.delete(id)
        setProfessores(ProfessorService.getAll())
        Swal.fire(
          'Excluido!',
          'Registro deletado.',
          'success'
        )
      }
    })
  }


  function delay() {
    let timerInterval
    Swal.fire({
      title: 'Carregando...',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
        navigate('/academico/cadastrar-professor')
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('Fechado pelo click')
      }
    })
  }

  return (
    <div>
      <h1>Professores</h1>

      <Button className='btn btn-info mb-3' onClick={handleSubmit(delay)}><FaPlus /> Novo</Button>

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
              <td>
                <Link to={'/professores/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
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