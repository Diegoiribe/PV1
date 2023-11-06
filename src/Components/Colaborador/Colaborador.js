import React from 'react'
import styled from 'styled-components'
import { colorPrimario, colorSecundario } from '../UI/Variables'

const ColaboradorDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 32%;
  height: 32%;
  border-radius: 5px;
  border: 2px solid;
  @media (max-width: 980px) {
    width: 80%;
    height: 32%;
    margin: 1% 0;
  }
`

const Colaborador = (props) => {
  const { nombre, puesto, foto, fondoPrimario } = props.datos

  return (
    <ColaboradorDiv
      style={{ backgroundColor: fondoPrimario, border: fondoPrimario }}
    >
      <div style={{ width: '80%', height: '100%' }}>
        <div
          style={{
            backgroundImage: `url(${foto})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center right 30%',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <h1 style={{ color: colorPrimario, fontSize: '1.4vw' }}>{nombre}</h1>
        <h2 style={{ color: colorPrimario, fontSize: '1.3vw' }}>{puesto}</h2>
      </div>
    </ColaboradorDiv>
  )
}

export default Colaborador
