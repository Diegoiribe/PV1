import React from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario,
  colorFuerte
} from '../UI/Variables'

const HeaderBoton = styled.button`
  font-weight: bolder;
  padding: 0.8vw 1.25vw;
  background: ${(props) => (props.primaty ? colorFuerte : colorSecundario)};
  font-size: 1.2vw;
  color: ${(props) => (props.primaty ? colorSecundario : colorFuerte)};
  border-radius: 5px;
  border: 1.25px solid ${colorPrimario};
  cursor: pointer;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
`

const Boton = (props) => {
  return <HeaderBoton primaty>{props.titulo}</HeaderBoton>
}

const BotonFooter = (props) => {
  return (
    <HeaderBoton style={{ padding: '0.5vw 1vw', fontSize: '1vw' }}>
      {props.titulo}
    </HeaderBoton>
  )
}

const BotonContactoDiv = styled.button`
  font-weight: bolder;
  padding: 0.8vw 3.25vw;
  background: ${colorPrimario};
  color: ${colorSecundario};
  border-radius: 20px;
  border: 1.25px solid ${colorPrimario};
  cursor: pointer;
`

const BotonContacto = (props) => {
  return (
    <BotonContactoDiv
      type="submit"
      style={{ fontSize: '.8vw', width: props.width }}
    >
      {props.titulo}
    </BotonContactoDiv>
  )
}

const BotonCardContactoDiv = styled.button`
  font-weight: bolder;
  padding: 0.8vw 3.25vw;
  background: ${colorSecundario};
  color: ${colorPrimario};
  border-radius: 20px;
  border: 1.25px solid ${colorSecundario};
  cursor: pointer;
`

const BotonCardContacto = (props) => {
  return (
    <BotonCardContactoDiv style={{ fontSize: '.8vw' }}>
      {props.titulo}
    </BotonCardContactoDiv>
  )
}

const BotonCardCitaDiv = styled.button`
  font-weight: bolder;
  padding: 0.8vw 35%;
  background: ${colorPrimario};
  color: ${colorSecundario};
  border-radius: 20px;
  border: 1.25px solid ${colorPrimario};
  cursor: pointer;
`

const BotonCardCita = (props) => {
  return (
    <BotonCardCitaDiv style={{ fontSize: '.8vw' }}>
      {props.titulo}
    </BotonCardCitaDiv>
  )
}

const BotonLoginDiv = styled.button`
  font-weight: bolder;
  width: 99%;
  padding: 0.8vw;
  margin: 1vw 0.5%;
  background: ${colorPrimario};
  color: ${colorSecundario};
  border-radius: 20px;
  border: 1.25px solid ${colorPrimario};
  cursor: pointer;
`

const BotonLogin = (props) => {
  return (
    <BotonLoginDiv style={{ fontSize: '.8vw' }}>{props.titulo}</BotonLoginDiv>
  )
}

const BotonBodyDiv = styled.button`
  font-weight: bolder;
  width: 43%;
  padding: 1vw;
  margin: 1vw 0.5%;
  background: ${colorFuerte};
  color: ${colorSecundario};
  border-radius: 5px;
  border: 1.25px solid ${colorFuerte};
  cursor: pointer;
`

const BotonBody = (props) => {
  return (
    <BotonBodyDiv style={{ fontSize: '1.5vw' }}>{props.titulo}</BotonBodyDiv>
  )
}

export {
  Boton,
  BotonFooter,
  BotonContacto,
  BotonCardContacto,
  BotonCardCita,
  BotonLogin,
  BotonBody
}
