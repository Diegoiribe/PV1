import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import { CampoContacto, TextAreaContacto } from '../CampoContacto/CampoContacto'
import { colorPrimario, colorSecundario, colorFuerte } from '../UI/Variables'
import { BotonContacto } from '../Boton/Boton'

const FormContactoDiv = styled.form`
  height: 70%;
  width: 62.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`

const TextContactoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  height: 12%;
`

const CampoContactoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
`

const FormContacto = (props) => {
  const [email, setEmail] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')

  const { registrarMensajeContacto } = props

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('Formulario enviado', e)
    let datosAEnviar = {
      nombre,
      email,
      telefono,
      mensaje,
      id: uuid()
    }

    registrarMensajeContacto(datosAEnviar)
  }

  return (
    <>
      <FormContactoDiv onSubmit={handleSubmitForm}>
        <TextContactoDiv>
          <h3 style={{ color: colorFuerte, fontSize: '2rem' }}>
            Agenda tu Servicio Con Nosotros
          </h3>
          <p style={{ color: colorPrimario, fontSize: '1vw' }}>
            Te contactaremos lo mas pronto posible
          </p>
        </TextContactoDiv>

        <CampoContactoDiv>
          <div>
            <h4 style={{ color: colorFuerte, margin: '.5rem 0' }}>
              Informacion de Contacto
            </h4>
          </div>
          <CampoContactoDiv>
            <CampoContacto
              titulo=""
              placeholder="Tu Email"
              value={email}
              setValor={setEmail}
            />
            <CampoContacto
              titulo=""
              placeholder="Nombre"
              value={nombre}
              setValor={setNombre}
            />
            <CampoContacto
              titulo=""
              placeholder="Numero De Telefono"
              value={telefono}
              setValor={setTelefono}
            />
          </CampoContactoDiv>
        </CampoContactoDiv>
        <div style={{ width: '100%' }}>
          <h4 style={{ color: colorFuerte, margin: '.5rem 0' }}>Mensaje</h4>
          <TextAreaContacto
            titulo=""
            placeholder="Ingresa un mensaje"
            value={mensaje}
            setValor={setMensaje}
          />
        </div>
        <BotonContacto color={colorSecundario} titulo="Enviar" />
      </FormContactoDiv>
    </>
  )
}

export default FormContacto
