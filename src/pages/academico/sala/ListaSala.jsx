import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SalaService from '../../../services/academico/SalaService'
import { FaPlus } from 'react-icons/fa'

const ListaSala = () => {

    const [salas, setSalas] = useState([])

    useEffect(() => {

        setSalas(SalaService.getAll())

    }, [])

    console.log(salas);
    return (
        <div>
            <h1>Salas</h1>

            <Link className='btn btn-info mb-3' to={'/academico/cadastrar-sala'}><FaPlus /> Novo</Link>

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
                    {salas.map((item, i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{item.nome}</td>
                            <td>{item.capacidade}</td>
                            <td>{item.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ListaSala