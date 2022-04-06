import styled from "styled-components"
import { motion } from "framer-motion"
import { zoomIn, fadeInUp } from "../../styles/Animations"

const Button = styled.button`
  background: ${({ theme }) => theme.colors.principal};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.text.paragraph};
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.rounded.xs};
  position: relative;
  transition: all .3s linear;
  font-weight: 400;
  line-height: 20px;
  z-index: 2;
  &:hover { 
    background: ${({ theme }) => theme.colors.principal_hover};
  }
`


const ButtonCTA = ({ label, styles, handleClick, animation}) => {
  console.log(fadeInUp)
  return (
    <Button
      as={motion.button}
      css={styles} 
      onClick={handleClick} 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={ animation ? zoomIn(animation.delay) : null}
    >
      { label }
    </Button>
  )
}

export default ButtonCTA