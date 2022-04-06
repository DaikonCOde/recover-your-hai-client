import styled from "styled-components"
import { motion } from "framer-motion"

const Button = styled(motion.button)`
  background: ${({ theme }) => theme.colors.principal};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.text.paragraph};
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.rounded.xs};
  position: relative;
  transition: all .3s linear;
  font-weight: 400;
  line-height: 20px;
  &:hover { 
    background: ${({ theme }) => theme.colors.principal_hover};
  }
`


const ButtonCTA = ({ label, styles, handleClick, animate }) => {
  return (
    <Button 
      css={styles} 
      onClick={handleClick} 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={animate}
    >
      { label }
    </Button>
  )
}

export default ButtonCTA