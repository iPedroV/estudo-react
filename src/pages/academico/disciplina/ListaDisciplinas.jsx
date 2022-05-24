import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DisciplinaService from '../../../services/academico/DisciplinaService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const ListaDisciplinas = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [disciplinas, setDisciplinas] = useState([])
  const { handleSubmit, setValue } = useForm();


  useEffect(() => {

      if (params.id) {
          const disciplina = DisciplinaService.get(params.id)

          for (let campo in disciplina) {
              setValue(campo, disciplina[campo])
          }
      }
      setDisciplinas(DisciplinaService.getAll())

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
            DisciplinaService.delete(id)
              setDisciplinas(DisciplinaService.getAll())
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
              navigate('/academico/cadastrar-disciplina')
          }
      }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
              console.log('Fechado pelo click')
          }
      })
  }

  return (
    <div>
      <h1>Disciplinas</h1>

      <Button className='btn btn-info mb-3' onClick={handleSubmit(delay)}><FaPlus /> Novo</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/disciplinas/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.curso}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default ListaDisciplinas