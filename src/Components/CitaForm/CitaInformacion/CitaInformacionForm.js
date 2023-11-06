import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CampoContactoInformacion } from '../../CampoContacto/CampoContacto'
import { v4 as uuid } from 'uuid'
import { colorSecundario, colorPrimario } from '../../UI/Variables'
import { BotonContacto } from '../../Boton/Boton'
import { useLocation } from 'react-router-dom'

const CitaInformacionFormLabel = styled.label`
  margin: 5% 1%;
  font-size: 1.75vw;
  color: ${colorPrimario};
`

const CitaInformacionForm = (props) => {
  const location = useLocation()
  const currentURL = location.pathname

  const segments = currentURL.split('/')

  const [citaId, setCitaId] = useState('')
  const [doctorName, setDoctorName] = useState('')
  const [Hora, setHora] = useState('')
  const [dia, setDia] = useState('')

  useEffect(() => {
    // Asigna cada segmento a su respectivo estado
    const CitaIdSegment = segments[2].replace(/-/g, ' ')
    setCitaId(decodeURIComponent(CitaIdSegment))

    const doctorNameSegment = segments[4]
    setDoctorName(decodeURIComponent(doctorNameSegment))

    const horaSegment = segments[6].replace(/%20/g, ' ') // Reemplaza %20 con un espacio en blanco
    setHora(decodeURIComponent(horaSegment))

    const diaSegment = decodeURIComponent(
      segments[8].replace(/07:00:00%20GMT|%20/g, ' ')
    ) // Reemplaza %20 con un espacio en blanco
    setDia(decodeURIComponent(diaSegment))
  }, [segments])

  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [domicilio, setDomicilio] = useState('')
  const [estado, setEstado] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [codigoPostal, setCodigoPostal] = useState('')
  const [mensaje, setMensaje] = useState('')

  const { registrarMensajeCita } = props

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('Formulario enviado', e)
    let datosAEnviar = {
      nombre,
      telefono,
      email,
      domicilio,
      estado,
      ciudad,
      codigoPostal,
      mensaje,
      id: uuid(),
      citaId,
      doctorName,
      Hora,
      dia,
      fav: false
    }

    registrarMensajeCita(datosAEnviar)
  }

  return (
    <>
      <form
        style={{ height: '100%', width: '50%' }}
        onSubmit={handleSubmitForm}
      >
        <div
          style={{
            width: '100%',
            height: '90%'
          }}
        >
          <div style={{ width: '100%', margin: '2.5% 1%' }}>
            <CitaInformacionFormLabel>
              Informacion de contacto
            </CitaInformacionFormLabel>
          </div>
          <CampoContactoInformacion
            width="99%"
            placeholder="Nombre"
            value={nombre}
            setValor={setNombre}
          />
          <CampoContactoInformacion
            placeholder="Telefono"
            width="49%"
            type="tel"
            value={telefono}
            setValor={setTelefono}
          />

          <CampoContactoInformacion
            width="49%"
            placeholder="Email"
            type="email"
            value={email}
            setValor={setEmail}
          />
          <div style={{ width: '100%', margin: '2.5% 1%' }}>
            <CitaInformacionFormLabel>
              Informacion de contacto
            </CitaInformacionFormLabel>
          </div>
          <CampoContactoInformacion
            width="99%"
            placeholder="Domicilio"
            value={domicilio}
            setValor={setDomicilio}
          />
          <CampoContactoInformacion
            width="32%"
            placeholder="Estado"
            value={estado}
            setValor={setEstado}
          />
          <CampoContactoInformacion
            width="32%"
            placeholder="Ciudad"
            value={ciudad}
            setValor={setCiudad}
          />
          <CampoContactoInformacion
            width="32%"
            placeholder="Codigo Postal"
            type="number"
            value={codigoPostal}
            setValor={setCodigoPostal}
          />
          <div style={{ width: '100%', margin: '2.5% 1%' }}>
            <CitaInformacionFormLabel>
              Informacion de contacto
            </CitaInformacionFormLabel>
          </div>
          <CampoContactoInformacion
            width="99%"
            placeholder="Mensaje"
            value={mensaje}
            setValor={setMensaje}
          />
        </div>
        <div
          style={{
            width: '100%',
            height: '10%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <BotonContacto color={colorSecundario} titulo="Enviar" />
        </div>
      </form>
    </>
  )
}

export default CitaInformacionForm
