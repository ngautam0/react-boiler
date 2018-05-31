import React from 'react'
/* THEME */
import ThemeDecorator from './themes/default'

/* STORYBOOK  */
import { storiesOf } from '@storybook/react'

/* ################################# */
import Typography from 'material-ui/Typography'

storiesOf('Typography', module)
  .addDecorator(ThemeDecorator)
  .add('Heading', () =>
    <Typography variant='display1'>This a page heading</Typography>
  )
