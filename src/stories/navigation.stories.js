import React from 'react'
/* THEME */
import ThemeDecorator from './themes/default'

/* STORYBOOK  */
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-router'

/* ################################# */
import { Link } from 'react-router-dom'

storiesOf('Links', module)
  .addDecorator(ThemeDecorator)
  .addDecorator(StoryRouter())
  .add('Default', () =>
    <Link to='/' onClick={action('clicked')}>Link</Link>
  )
