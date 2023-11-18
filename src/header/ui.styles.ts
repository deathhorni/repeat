import styled from 'styled-components'
import { ellipsis } from 'polished'

import colors from '../colors'

import { DEFAULT_TOP, WRAPPER_HEIGHT } from './consts'

export const Wrapper = styled.div`
  position: fixed;
  top: ${DEFAULT_TOP}px;
  width: 100%;
  height: ${WRAPPER_HEIGHT}px;
  background: ${colors.dark};
  color: ${colors.light};
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 8px;
`

export const ReturnBtn = styled.button`
  all: unset;
  padding: 4px;
  border: 2px solid ${colors.light};
  border-radius: 8px;
  color: ${colors.light};
  background: ${colors.dark};
  margin-right: 8px;
`

export const Title = styled.div`
  ${ellipsis(null, 2)}
`