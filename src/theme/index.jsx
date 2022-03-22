import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './globalStyles.js'
import { GlobalClass } from './globalClass.js'
import variables from './variables.js'
// Animation
import { AnimatePresence } from 'framer-motion'

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={variables} > 
      <GlobalStyles />
      <GlobalClass />

      <AnimatePresence>
        { children }
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default Theme;