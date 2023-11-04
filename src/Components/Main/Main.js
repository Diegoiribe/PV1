import React from 'react'
import styled from 'styled-components'
import doctor from '../../img/doctor2.webp'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 50% 10%;
  grid-template-rows: 30% 50% 20%;
  width: 100%;
  height: 100vh;
`
const MainDivOne = styled.div`
  grid-column: 1/5;
  grid-row: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colorPrimario};
  margin-top: 0.5rem;
`
const MainDivTwo = styled.div`
  grid-column: 2/3;
  grid-row: 2/4;
  background: url(${doctor});
  background-position: center right 26%;
  background-size: cover;
  border-radius: 10px;
  margin: 1rem;
`

const MainDivThree = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;
  background: ${colorSecundario};
  border-radius: 10px;
  margin: 1rem 1rem 0.5rem;
  padding: 1vw 2.5vw;
`

const MainDivFour = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;
  background: ${colorSecundario};
  border-radius: 10px;
  margin: 0.5rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  div {
    width: 30%;
  }
`

const Main = () => {
  return (
    <MainContainer>
      <MainDivOne>
        <h2
          style={{
            maxWidth: '30%',
            textAlign: 'center',
            color: colorSecundario,
            fontSize: '2.5vw'
          }}
        >
          Transformando belleza y restaurando confianza, con orgullo
        </h2>
      </MainDivOne>
      <MainDivTwo></MainDivTwo>
      <MainDivThree>
        <p
          style={{
            color: colorPrimario,
            margin: '0 0.5rem .5rem',
            fontSize: '1.1vw'
          }}
        >
          Egresado, en 2006, como Médico, por la Facultad de Medicina de la
          Universidad Autónoma de Baja California (UABC) Campus Mexicali.{' '}
        </p>
        <p
          style={{
            color: colorPrimario,
            margin: '.5rem',
            fontSize: '1.1vw'
          }}
        >
          Especialista en Cirugía General por el Hospital Universitario ¨Dr.
          José Eleuterio González¨ de la Universidad Autónoma de Nuevo León
          (UANL) en 2013.
        </p>
        <p
          style={{
            color: colorPrimario,
            margin: '.5rem',
            fontSize: '1.1vw'
          }}
        >
          Subespecialista en Cirugía Plástica y Reconstructiva por el Hospital
          Universitario ¨Dr. José Eleuterio González¨ de la Universidad Autónoma
          de Nuevo León (UANL) en 2016.
        </p>
        <p
          style={{
            color: colorPrimario,
            margin: '.5rem',
            fontSize: '1.1vw'
          }}
        >
          Es miembro de Asociación Mexicana de Cirugía Plástica, Estética y
          Reconstructiva (AMCPER) y cuenta con la Certificación No. 1895 del
          Consejo Mexicano de Cirugía Plástica, Estética y Reconstructiva
          (CMCPER).
        </p>
        <p
          style={{
            color: colorPrimario,
            margin: '.5rem .5rem 0',
            fontSize: '1.1vw'
          }}
        >
          Es autor de artículos incluidos en revistas especializadas y obras
          colectivas, así como conferencista en diversos eventos académicos y
          congresos.
        </p>
      </MainDivThree>
      <MainDivFour>
        <div>
          <h2
            style={{
              color: colorPrimario,
              fontSize: '2vw',
              textAlign: 'center'
            }}
          >
            + 11
          </h2>
          <p
            style={{
              color: colorPrimario,
              fontWeight: 700,
              textAlign: 'center',
              fontSize: '1.5vw'
            }}
          >
            Años de experiencia
          </p>
        </div>
        <div>
          <h2
            style={{
              color: colorPrimario,
              fontSize: '2vw',
              textAlign: 'center'
            }}
          >
            + 100
          </h2>
          <p
            style={{
              color: colorPrimario,
              fontWeight: 700,
              textAlign: 'center',
              fontSize: '1.5vw'
            }}
          >
            Cirugias plasticas realizadas
          </p>
        </div>
        <div>
          <h2
            style={{
              color: colorPrimario,
              fontSize: '2vw',
              textAlign: 'center'
            }}
          >
            + 500
          </h2>
          <p
            style={{
              color: colorPrimario,
              fontWeight: 700,
              textAlign: 'center',
              fontSize: '1.5vw'
            }}
          >
            Pacientes satisfechos
          </p>
        </div>
      </MainDivFour>
    </MainContainer>
  )
}

export default Main
