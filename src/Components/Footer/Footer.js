import React from 'react'
import styled from 'styled-components'
import Formulario from '../Formulario/Formulario'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'

const FooterDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const FooterDivOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  background: ${colorPrimario};
  padding: 1.5rem 11%;
`
const FooterDivTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colorPrimario};
  font-weight: bolder;
  width: 100%;
  padding: 1rem;
`
const FooterP = styled.p`
  font-size: 1.1vw;
  font-weight: bolder;
  color: white;
  margin: 0.5rem 0;
`

const Footer = () => {
  return (
    <FooterDiv>
      <FooterDivOne>
        <div>
          <h2 style={{ color: colorSecundario }}>Dr. Lopez Lugo</h2>
        </div>
        <div>
          <FooterP>Inicio</FooterP>
          <FooterP>Servicio</FooterP>
          <FooterP>Acerca</FooterP>
          <FooterP>Consulta</FooterP>
        </div>
        <div>
          <Formulario />
        </div>
      </FooterDivOne>
      <FooterDivTwo>
        <p style={{ fontSize: '1vw' }}>
          Desarrollado por Diego Iribe Carrazco - 2023
        </p>
      </FooterDivTwo>
    </FooterDiv>
  )
}

export default Footer
