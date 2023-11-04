import React from 'react'
import styled from 'styled-components'
import Colaborador from '../Colaborador/Colaborador'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'

const Equipo = (props) => {
  const { colaboradores } = props
  return (
    <div>
      <div
        style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          margin: '1rem 10%'
        }}
      >
        <h1 style={{ color: colorPrimario }}>Equipo</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '80%',
          height: '100vh',
          margin: '0.5rem 10%',
          flexWrap: 'wrap'
        }}
      >
        {colaboradores.map((colaborador, index) => {
          return <Colaborador datos={colaborador} key={index} />
        })}
      </div>
    </div>
  )
}

export default Equipo
