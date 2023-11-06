import React from 'react'
import styled from 'styled-components'

import imagenTwo from '../../img/doctor2.webp'

import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'
import { BotonBody } from '../Boton/Boton'
import { Link } from 'react-router-dom'

const BodyContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 10% 26.6% 26.6% 26.6% 10%;
  grid-template-rows: 10% 30% auto 30%;
`
const BodyCardOne = styled.div`
  grid-column: 4/5;
  grid-row: 2/5;

  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin: 0.5rem;
`
const BodyCardTwo = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;

  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin: 0.5rem;
`
const BodyCardThree = styled.div`
  grid-column: 3/4;
  grid-row: 4/5;

  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin: 0.5rem;
`

const BodyCardFour = styled.div`
  grid-column: 2/5;
  grid-row: 2/5;
  background: url(${imagenTwo});
  background-position: center right 25%;
  background-size: cover;
  border-radius: 5px;
  margin: 0.5rem;
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: left;
  padding: 20vh 15vw;
  @media (max-width: 980px) {
    background-position: center right 35%;
  }
`
const BodyCardFive = styled.div`
  grid-column: 4/5;
  grid-row: 2/4;

  background-size: cover;
  border-radius: 5px;
  margin: 0.5rem;
`
const BodyCardSix = styled.div`
  grid-column: 3/4;
  grid-row: 4/5;

  background-position: center;
  background-size: cover;
  border-radius: 5px;
  margin: 0.5rem;
`

const Body = () => {
  const styles = {
    fontSize: '3.5rem',
    color: colorSecundario,
    width: '55%'
  }

  // Aplicar estilos condicionales en función del ancho de la pantalla
  if (window.innerWidth <= 980) {
    styles.width = '100%'
    styles.fontSize = '3rem'
  }

  return (
    <BodyContainer>
      {/* <BodyCardOne></BodyCardOne>
      <BodyCardTwo></BodyCardTwo> */}
      {/* <BodyCardThree></BodyCardThree> */}
      <BodyCardFour>
        <h1 style={styles}>Dr. Omar Lopez Lugo</h1>
        <Link to="/Cita">
          <BotonBody titulo="Haz tu cita" />
        </Link>
      </BodyCardFour>
      {/* <BodyCardFive></BodyCardFive> */}
      {/* <BodyCardSix></BodyCardSix> */}
    </BodyContainer>
  )
}

export default Body
