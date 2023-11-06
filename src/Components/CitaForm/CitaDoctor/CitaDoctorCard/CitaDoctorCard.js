import React from 'react'
import styled from 'styled-components'
import {
  colorFuerte,
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../../../UI/Variables'
import { Link } from 'react-router-dom'

const CitaDoctorDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 10%;
  align-items: center;
  margin: 2.5% 10% 5%;
  width: 78%;
  flex-grow: 1;
  background: ${colorPrimario};
  border-radius: 10px;
  border-bottom: 1px solid ${fondoPrimario};
  height: 10vh;
`

const CitaDoctorCard = ({ citaservice }) => {
  return (
    <CitaDoctorDiv>
      <div
        style={{
          minWidth: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          textDecoration: 'none'
        }}
      >
        <h1 style={{ color: colorSecundario }}>{citaservice.name}</h1>
      </div>
    </CitaDoctorDiv>
  )
}

export default CitaDoctorCard
