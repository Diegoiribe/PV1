import React from 'react'
import styled from 'styled-components'
import CardInstalaciones from '../CardInstalaciones/CardInstalaciones'
import { colorPrimario, colorFuerte, fondoPrimario } from '../UI/Variables'

const InstalacionesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10% 10% 0;
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  max-width: 25%;
  min-height: 15vh;
  flex-wrap: wrap;
`

const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  min-height: 15vh;
  background: ${fondoPrimario};
  border-radius: 10px;
`

const Instalaciones = ({ cardInstalaciones }) => {
  return (
    <InstalacionesDiv>
      <TextDiv>
        <h2 style={{ color: colorFuerte }}>Instalaciones</h2>
        <p style={{ color: colorFuerte, fontSize: '1.25vw' }}>
          Montecarlo, Parque Canacintra I, 80054 Culiacán Rosales, Sin.
        </p>
      </TextDiv>

      <ImgDiv>
        {cardInstalaciones.map((cardInstalacion, index) => {
          return <CardInstalaciones key={index} datos={cardInstalacion} />
        })}
      </ImgDiv>
    </InstalacionesDiv>
  )
}

export default Instalaciones
