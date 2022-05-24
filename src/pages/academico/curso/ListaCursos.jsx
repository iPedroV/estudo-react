import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import CursoService from '../../../services/academico/CursoService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const ListaCursos = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [cursos, setCursos] = useState([])
    const { handleSubmit, setValue } = useForm();


    useEffect(() => {

        if (params.id) {
            const curso = CursoService.get(params.id)

            for (let campo in curso) {
                setValue(campo, curso[campo])
            }
        }
        setCursos(CursoService.getAll())

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
                CursoService.delete(id)
                setCursos(CursoService.getAll())
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
                navigate('/academico/cadastrar-curso')
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('Fechado pelo click')
            }
        })
    }

    return (
        <div>
            <h1>Cursos</h1>

            <Button className='btn btn-info mb-3' onClick={handleSubmit(delay)}><FaPlus /> Novo</Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Duracao</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link to={'/cursos/' + i}><BsPencilFill /></Link>{' '}
                                <BsTrash onClick={() => apagar(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.duracao}</td>
                            <td>{item.modalidade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </div>
    )
}

export default ListaCursos