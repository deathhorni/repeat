import styled from 'styled-components'

import colors from '../../colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 300px;
  width: 100%;
  min-width: 300px;
`

export const Btns = styled.div`
  padding-top: 40px;
  display: flex;
  gap: 8px;
`

export const Btn = styled.button`
  flex: 1;
  background: ${colors.std};
  color: ${colors.white};
  font-weight: 600;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  height: 50px;
  &:disabled {
    opacity: 0.4;
  }
`