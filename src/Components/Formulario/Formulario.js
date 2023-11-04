import { useState } from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import { BotonFooter } from '../Boton/Boton'
import { v4 as uuid } from 'uuid'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'
import { Link } from 'react-router-dom'

const Formulario = (props) => {
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  const { registrarMensaje } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado', e)
    let datosAEnviar = {
      nombre,
      mensaje,
      id: uuid()
    }

    registrarMensaje(datosAEnviar)
  }

  return (
    <div>
      <form
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
          alignItems: 'start',
          minHeight: '30vh'
        }}
        onSubmit={handleSubmit}
      >
        <h3 style={{ color: colorSecundario }}>Hazlo con nosotros</h3>
        <CampoTexto
          titulo=""
          placeholder="Ingresa tu nombre"
          value={nombre}
          setValor={setNombre}
        />
        <CampoTexto
          titulo=""
          placeholder="Ingresa tu mensaje"
          value={mensaje}
          setValor={setMensaje}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <BotonFooter color={colorPrimario} titulo="Enviar" />
          <Link to="/login">
            <BotonFooter color={colorPrimario} titulo="Login" />
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Formulario
