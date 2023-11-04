import React from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario,
  colorFuerte,
  fondoSecundario
} from '../UI/Variables'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import { BotonCardContacto } from '../Boton/Boton'
import { Link } from 'react-router-dom'

const CardContactoDiv = styled.div`
  width: 32.5%;
  height: 80%;
  background-color: ${colorFuerte};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const CardContactoDivTwo = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const CardContactoDivThree = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`
const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  background: ${fondoSecundario};
`

const CardContacto = ({ setSeccion, setSeccionActiva }) => {
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
  return (
    <CardContactoDiv>
      <div
        style={{
          borderBottom: '1px solid',
          borderColor: fondoPrimario,
          padding: '2.5vh 0'
        }}
      >
        <h3 style={{ color: colorSecundario, fontSize: '2rem' }}>
          Agenda con nosotros
        </h3>
        <p style={{ color: colorSecundario, fontSize: '1vw' }}>
          Tenemos a tu disposicion
        </p>
      </div>
      <div>
        <CardContactoDivTwo>
          <IconDiv>
            <RoomOutlinedIcon
              fontSize="medium"
              style={{ color: colorSecundario }}
            />
          </IconDiv>
          <CardContactoDivThree>
            <h4 style={{ color: colorSecundario, fontSize: '2rem' }}>
              Visitanos
            </h4>
            <p style={{ color: colorSecundario, fontSize: '1vw' }}>
              Montecarlo, Parque Canacintra I, 80054 Culiacán Rosales, Sin
            </p>
          </CardContactoDivThree>
        </CardContactoDivTwo>
        <CardContactoDivTwo>
          <IconDiv>
            <ForwardToInboxOutlinedIcon
              fontSize="medium"
              style={{ color: colorSecundario }}
            />
          </IconDiv>
          <CardContactoDivThree>
            <h4 style={{ color: colorSecundario, fontSize: '2rem' }}>
              Escribenos
            </h4>
            <p style={{ color: colorSecundario, fontSize: '1vw' }}>
              Doctor@ejemplo.com
            </p>
          </CardContactoDivThree>
        </CardContactoDivTwo>
        <CardContactoDivTwo>
          <IconDiv>
            <PhoneIphoneOutlinedIcon
              fontSize="medium"
              style={{ color: colorSecundario }}
            />
          </IconDiv>
          <CardContactoDivThree>
            <h4 style={{ color: colorSecundario, fontSize: '2rem' }}>
              Llamanos
            </h4>
            <p style={{ color: colorSecundario, fontSize: '1vw' }}>
              (+52) xxx-xxxx-xx
            </p>
          </CardContactoDivThree>
        </CardContactoDivTwo>
      </div>
      <Link
        style={{
          textDecoration: 'none'
        }}
        onClick={() => cambiarSeccion('cita')}
        to="/Cita"
      >
        <BotonCardContacto titulo="Agendar cita" />
      </Link>
    </CardContactoDiv>
  )
}

export default CardContacto
