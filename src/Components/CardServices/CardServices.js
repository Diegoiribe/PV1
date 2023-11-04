import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import { colorPrimario, fondoPrimario, colorFuerte } from '../UI/Variables'

const CardServicesOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10%;
  align-items: center;
  margin: 1% 10%;
  width: 78%;
  flex-grow: 1;
  border-bottom: 1px solid ${fondoPrimario};
  height: 15vh; // Cambio de altura si está activo
`

const CardServicesP = styled.p`
  font-size: 1.1vw;
  color: ${colorPrimario};
  margin: 0.5rem 0;
`

const CardServices = ({ service, height }) => {
  const { fav, id, photo, text } = service
  console.log('height:', height)

  const parrafos = text.split('\n')
  const parrafosRenderizados = parrafos.map((parrafo, index) => (
    <CardServicesP key={index}>{parrafo}</CardServicesP>
  ))
  return (
    <>
      {fav ? (
        <CardServicesOne
          onClick={() => height(id)}
          style={{
            height: '50vh',
            width: '88%',
            margin: '1% 5%',
            padding: '0 5%',
            transition: 'height 0.3s ease',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              minHeight: '40vh',
              width: '40vw',
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column'
            }}
          >
            <h3 style={{ color: colorPrimario, fontSize: '2rem' }}>
              {service.name}
            </h3>
            <div>{parrafosRenderizados}</div>
          </div>
          <div
            style={{
              backgroundImage: `url(${photo})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center right 30%',
              width: '20vw',
              height: '45vh',
              borderRadius: '10px'
            }}
          />
        </CardServicesOne>
      ) : (
        <CardServicesOne
          style={{ transition: 'height 0.3s ease', overflow: 'hidden' }}
        >
          <h3 style={{ color: colorPrimario, fontSize: '2rem' }}>
            {service.name}
          </h3>
          <div
            style={{
              width: '3.5vw',
              height: '3.5vw',
              background: colorFuerte,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow:
                '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
              transition:
                'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}
            onClick={() => height(id)}
          >
            <AddIcon style={{ color: 'white' }} />
          </div>
        </CardServicesOne>
      )}
    </>
  )
}

export default CardServices
