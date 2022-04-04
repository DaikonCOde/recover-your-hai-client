import styled from "styled-components"

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.principal};
  background: transparent;
  color: ${({ theme }) => theme.colors.principal};
  font-size: ${({ theme }) => theme.text.paragraph};
  padding: 10px 35px;
  border-radius: ${({ theme }) => theme.rounded.xs};
  position: relative;
  transition: all .3s linear;
  font-weight: 500;
  line-height: 20px;
  &:hover { 
    background: ${({ theme }) => theme.colors.principal};
    color: ${({ theme }) => theme.colors.white};
  }
`



const ButtonBorder = ({ label, styles, handleClick }) => {
  return (
    <Button css={styles} className='buttonBorder' onClick={handleClick} >
      {label}
    </Button>
  )
}

export default ButtonBorder