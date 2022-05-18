import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DisciplinaService from '../../../services/academico/DisciplinaService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import ReactPlayer from 'react-player/lazy'

const ListaDisciplinas = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {

        setDisciplinas(DisciplinaService.getAll())

    }, [])

    function apagar(id){
        DisciplinaService.delete(id)
        setDisciplinas(DisciplinaService.getAll())
    }

    console.log(disciplinas);

    return (
        <div className="fundo">
            <h1>Disciplinas</h1>

            <Link className='btn btn-info mb-3' to={'/academico/cadastrar-disciplina'}><FaPlus /> Novo</Link>
            <ReactPlayer url='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/pt-br/production/pt-br/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm' muted={true} playing={true} loop={true} />

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
                                <div className="text-center d-flex space-between">
                                <BsPencilFill/>
                                <BsTrash/>
                                </div>
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