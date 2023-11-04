import './CitaFecha.css'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { DemoItem } from '@mui/x-date-pickers/internals/demo'
import { colorFuerte, colorPrimario } from '../../Components/UI/Variables'
import CitaFechaCard from '../../Components/CitaForm/CitaFecha/CitaFechaCard'
import { BotonCardCita } from '../../Components/Boton/Boton'
import Footer from '../../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

const CitaFechaLInkDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin: 7.5% 10% 5% 10%;
  width: 80%;
  max-height: 75vh;
`

const CitaFechaLink = ({ hora, horaSeleccionada }) => {
  const [time, setTime] = useState(dayjs(''))
  const { registrarMensaje, id } = hora

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado', e)
    let datosAEnviar = {
      time
    }

    console.log(datosAEnviar)
    navigate(`${URL}/Dia/${time}/Informacion`)
  }

  const location = useLocation()
  const currentURL = location.pathname

  const URL = currentURL

  const navigate = useNavigate()

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CitaFechaLInkDiv>
          <div>
            <LocalizationProvider
              style={{ marginTop: '0' }}
              dateAdapter={AdapterDayjs}
            >
              <DemoItem style={{ marginTop: '0' }} label="">
                <DateCalendar
                  style={{ color: colorPrimario, height: '290px' }}
                  valor={time}
                  onChange={(newValue) => setTime(newValue)}
                />
              </DemoItem>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <BotonCardCita titulo="Siguiente" />
              </div>
            </LocalizationProvider>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '40%',
              justifyContent: 'space-around',
              height: '70vh'
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h4 style={{ color: colorPrimario }}>Elige una hora</h4>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              {hora.map((horaItem, index) => (
                <CitaFechaCard
                  hora={horaItem}
                  key={index}
                  horaSeleccionada={horaSeleccionada}
                />
              ))}
            </div>
          </div>
        </CitaFechaLInkDiv>
      </form>
      <Footer />
    </>
  )
}

export default CitaFechaLink
