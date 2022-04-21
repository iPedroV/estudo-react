import React, { useEffect, useState } from 'react'
import apiDisney from '../../services/apiDisney'

const PersonagensGot = () => {
    const [personagens, setPersonagens] = useState([])

    useEffect(() => {

        apiDisney.get('/characters').then(resultado => {
            setPersonagens(resultado.data)
            console.log(resultado.data)
            
        })

    }, [])
  return (
    <div>PersonagensGot</div>
  )
}

export default PersonagensGot