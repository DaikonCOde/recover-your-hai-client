import React from 'react'
// Styles
import { StyleCard } from '../../styles/Cards'
// Components
import ButtonCTA from '../ButtonCTA'

const Card = ({ img, title, paragraph }) => {
  return (
    <StyleCard className="cardsSlide">
      <div className="imgCard">
        <img src={img} alt={title} />
      </div>
      <div className="bodyCard">
        <h3 className="title">{title}</h3>
        <p className="paragraph">
          {paragraph}
        </p>
        <ButtonCTA 
          label='Más información'
          styles='display:block; margin: 30px auto 0;'
        />
      </div>
    </StyleCard>
  )
}

export default Card