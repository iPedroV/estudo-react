import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import apiDisney from '../../services/apiDisney'

const PersonagemDetalhes = () => {

    const [personagem, setPersonagem] = useState({})
    const params = useParams()

    apiDisney.get('/characters/' + params._id ).then(resultado => {
        setPersonagem(resultado.data)
        //console.log(resultado.data) //pra ver no console o resultado
    })

  return (
    <div>{personagem.name}</div>
  )
}

export default PersonagemDetalhes