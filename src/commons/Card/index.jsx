import React from 'react'
// Styles
import { StyleCard } from '../../styles/Cards'
// Components
import ButtonCTA from '../ButtonCTA'
// animation
import { motion } from 'framer-motion'
import { fadeInRight } from '../../styles/Animations'

const Card = ({ img, title, paragraph, handleClick, animation }) => {
  return (
    <StyleCard 
      as={motion.div}
      className="cardsSlide"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInRight( animation ? animation.delay : 0 )}
    >
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
          handleClick={handleClick}
        />
      </div>
    </StyleCard>
  )
}

export default Card