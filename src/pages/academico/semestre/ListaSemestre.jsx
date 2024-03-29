import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import SemestreService from '../../../services/academico/SemestreService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const ListaSemestre = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [semestres, setSemestres] = useState([])
    const { handleSubmit, setValue } = useForm();

    useEffect(() => {

        if (params.id) {
            const curso = SemestreService.get(params.id)

            for (let campo in curso) {
                setValue(campo, curso[campo])
            }
        }
        setSemestres(SemestreService.getAll())

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
                SemestreService.delete(id)
                setSemestres(SemestreService.getAll())
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
                navigate('/academico/cadastrar-semestre')
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('Fechado pelo click')
            }
        })
    }

    return (
        <div>
            <h1>Salas</h1>

            <Button className='btn btn-info mb-3' onClick={handleSubmit(delay)}><FaPlus /> Novo</Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Capacidade</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {semestres.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link to={'/cursos/' + i}><BsPencilFill /></Link>{' '}
                                <BsTrash onClick={() => apagar(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.data_inicio}</td>
                            <td>{item.data_fim}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ListaSemestre