import styled from 'styled-components'

import colors from '../colors'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: ${colors.std};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export const Btn = styled.button`
  color: ${colors.white};
  font-weight: 600;
  cursor: pointer;
  &:hover, &:disabled {
    background: ${colors.dark};
  }
`