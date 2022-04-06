import React, { useEffect, useState } from 'react'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => { 
        
        apiFilmes.get('movie/popular').then(resultado=>{
            console.log(resultado.data.results)
        })

    }, []) 
    //o primeiro parâmetro é uma função anônima, dentro das chaves é o corpo da função. No array, é aonde eu vou botar variáveis, toda vez que eu mudar o valor delas, eu chamo a função

    return (
        <div>
            <h1>Filmes Populares</h1>

        </div>
    )
}

export default FilmesPopulares