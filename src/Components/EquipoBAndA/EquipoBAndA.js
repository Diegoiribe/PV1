import React from 'react'
import CardBAndA from '../CardBAndA/CardBAndA'

const EquipoBAndA = ({ cardAntes }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'start',
        width: '80%',

        margin: '0.5rem 10%',
        flexWrap: 'wrap'
      }}
    >
      {cardAntes.map((cardData, index) => {
        return <CardBAndA datos={cardData} key={index} />
      })}
    </div>
  )
}

export default EquipoBAndA
