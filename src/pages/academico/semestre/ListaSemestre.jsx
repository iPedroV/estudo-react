import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SemestreService from '../../../services/academico/SemestreService'
import { FaPlus } from 'react-icons/fa'

const ListaSemestre = () => {

    const [semestres, setSemestre] = useState([])

    useEffect(() => {

        setSemestre(SemestreService.getAll())

    }, [])

    console.log(semestres);
  return (
    <div>
        <h1>Salas</h1>

<Link className='btn btn-info mb-3' to={'/academico/cadastrar-semestre'}><FaPlus /> Novo</Link>

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
                <td>{i}</td>
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