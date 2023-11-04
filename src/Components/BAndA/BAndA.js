import React from 'react'
import styled from 'styled-components'
import { colorPrimario, colorSecundario, fondoPrimario } from '../UI/Variables'

const BAndADiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1% 0;
  background: ${colorPrimario};
  height: 25vh;
`

const BAndA = () => {
  return (
    <div>
      <BAndADiv>
        <h2 style={{ color: colorSecundario }}>Before and After</h2>
      </BAndADiv>
    </div>
  )
}

export default BAndA
