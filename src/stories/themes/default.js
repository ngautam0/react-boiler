import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import { defaultTheme } from '../../themes'
import CssBaseline from 'material-ui/CssBaseline'

function ThemeDecorator (storyFn) {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      { storyFn() }
    </MuiThemeProvider>
  )
}

export default ThemeDecorator
