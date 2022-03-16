import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './globalStyles.js'
import { GlobalClass } from './globalClass.js'
import variables from './variables.js'

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={variables} > 
      <GlobalStyles />
      <GlobalClass />
      { children }
    </ThemeProvider>
  )
}

export default Theme;