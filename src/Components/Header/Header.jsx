import React from 'react'
import styled from 'styled-components'
import { Boton } from '../Boton/Boton'
import { Link } from 'react-router-dom'
import {
  colorFuerte,
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../UI/Variables'

const HeaderContainer = styled.div`
  padding: 0 10%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${colorSecundario};
  width: 100%;
  height: 10vh;
  flex-direction: row;
  border-bottom: 1px solid ${fondoPrimario};
  z-index: 1;
`
const HeaderDivTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 40%;
  background: ${fondoPrimario};
  border-radius: 4.375rem;
  padding: 0.3rem;
`
const HeaderP = styled.p`
  font-weight: bolder;
  font-family: 'Epidemic', sans-serif;
  background: ${fondoPrimario};
  padding: 0.8rem 1.5rem;
  color: ${colorPrimario};
  border-radius: 5px;
  font-size: 1.15rem;
  cursor: pointer;
  &:hover {
    color: #666;
  }
`

const HeaderH1 = styled.h1`
  color: ${colorPrimario};
  font-family: 'Epidemic', sans-serif;
  font-size: 3.5rem;
`

const Header = ({ seccion, setSeccion, seccionActiva, setSeccionActiva }) => {
  const cambiarSeccion = (nombre) => {
    setSeccionActiva(nombre)
    setSeccion((prevSeccion) =>
      prevSeccion.map((seccion) => ({
        ...seccion,
        uso: seccion.name === nombre
      }))
    )
    window.scrollTo(0, 0)
  }

  const customStyle = {
    background: colorFuerte,
    borderRadius: '4.375rem',
    color: colorSecundario,
    transition: '.6s'
  }

  return (
    <HeaderContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <HeaderH1>Dr. Lopez Lugo</HeaderH1>
      </div>
      <HeaderDivTwo>
        <Link style={{ textDecoration: 'none' }} to="/">
          <HeaderP
            style={
              seccionActiva === 'inicio' && seccion[0].uso ? customStyle : {}
            }
            onClick={() => cambiarSeccion('inicio')}
          >
            Inicio
          </HeaderP>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Servicio">
          <HeaderP
            style={
              seccionActiva === 'servicio' && seccion[1].uso ? customStyle : {}
            }
            onClick={() => cambiarSeccion('servicio')}
          >
            Servicio
          </HeaderP>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/Contacto">
          <HeaderP
            style={
              seccionActiva === 'contacto' && seccion[2].uso ? customStyle : {}
            }
            onClick={() => cambiarSeccion('contacto')}
          >
            Contacto
          </HeaderP>
        </Link>
      </HeaderDivTwo>
      <Link
        style={{
          textDecoration: 'none'
        }}
        onClick={() => cambiarSeccion('cita')}
        to="/Cita"
      >
        <Boton primaty="false" titulo="Agenda tu cita" />
      </Link>
    </HeaderContainer>
  )
}

export default Header
