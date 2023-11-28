import styled from 'styled-components'

import colors from '../../colors'
import BasedContent from '../../content'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  min-width: 300px;
  min-height: 100%;
`

export const Btns = styled.div`
  margin-top: auto;
  margin-bottom: 60px;
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

export const Content = styled(BasedContent)`
  justify-content: flex-start;
  padding-top: 60px;
`