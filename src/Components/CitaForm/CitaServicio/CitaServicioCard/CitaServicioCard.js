import React from 'react'
import styled from 'styled-components'
import {
  colorPrimario,
  colorSecundario,
  fondoPrimario
} from '../../../UI/Variables'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const CitaServicioDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 10%;
  align-items: center;
  margin: 1% 10%;
  width: 78%;
  flex-grow: 1;
  border-bottom: 1px solid ${fondoPrimario};
  height: 10vh;
`

const CitaServicioCard = ({ citaservice }) => {
  return (
    <CitaServicioDiv>
      <Link
        style={{
          minWidth: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          textDecoration: 'none'
        }}
        to={`/Cita/${citaservice.name}`}
      >
        <h3 style={{ color: colorPrimario }}>{citaservice.name}</h3>
        <ArrowForwardIosIcon
          fontSize="small"
          style={{ color: colorPrimario }}
        />
      </Link>
    </CitaServicioDiv>
  )
}

export default CitaServicioCard
