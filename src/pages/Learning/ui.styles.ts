import styled from 'styled-components'

import colors from '../../colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 20px;
`

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 30px;
`

export const Btn = styled.button`
  all: unset;
  box-sizing: border-box;
  background: ${colors.dark};
  color: ${colors.light};
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
`