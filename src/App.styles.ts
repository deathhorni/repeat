import { createGlobalStyle } from 'styled-components'

import colors from './colors'

export const CurrentGlobalStyle = createGlobalStyle`
  body {
    background: ${colors.light};
  }
`