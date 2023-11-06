import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import CitaDoctor from '../../Components/CitaForm/CitaDoctor/CitaDoctor'
import CitaDoctorCard from '../../Components/CitaForm/CitaDoctor/CitaDoctorCard/CitaDoctorCard'
import { colorFuerte, colorPrimario } from '../../Components/UI/Variables'
import Footer from '../../Components/Footer/Footer'
import { BotonCardCita } from '../../Components/Boton/Boton'

const CitaDoctorLinkDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin: 7.5% 10% 0 10%;
  width: 80%;
  flex-direction: column;
`

const CitaDoctorLink = ({ citaDoctor, citaservice }) => {
  const location = useLocation()
  const currentURL = location.pathname
  const segments = currentURL.split('/')
  const idFromURL = segments[segments.length - 1] // El último segmento debería ser el ID
  console.log(idFromURL)

  const citaServiceItem = citaservice.find((item) => item.name === idFromURL)

  return (
    <div
      style={{
        height: '150vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CitaDoctorLinkDiv>
        <h1 style={{ margin: '0 10%', color: colorPrimario }}>
          Escoger Doctor
        </h1>
        <div style={{ width: '100%' }}>
          {citaServiceItem && (
            <CitaDoctorCard
              key={citaServiceItem.id}
              citaservice={citaServiceItem}
            />
          )}
        </div>
        <div style={{ width: '100%', cursor: 'pointer' }}>
          {citaDoctor.map((citaDoctor) => (
            <CitaDoctor
              key={citaDoctor.id}
              citaDoctor={citaDoctor}
              citaservice={citaServiceItem}
            />
          ))}
        </div>
      </CitaDoctorLinkDiv>

      <Footer />
    </div>
  )
}

export default CitaDoctorLink
