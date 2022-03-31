import React from 'react'

const Array = () => {

  const carros = [
    
    'Gol', 
    'Celta', 
    'Corola', 
    'Corsa'
  ]
  const pessoas = ['Pedro', 'Vitor', 'Costa', 'Silva']

  return (
    <div>
      <h2>Array</h2>
      <h4>Carros</h4>
      {
        carros.map(item => (
          
          <p>{item}</p>
        ))
      }
      <h4>Pessoas</h4>
      <ul>
      {
        pessoas.map(individuos => (

          <li>{individuos}</li>

        ))
      }
      </ul>


    </div>
  )
}

export default Array