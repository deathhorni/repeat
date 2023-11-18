import styled from 'styled-components'

import colors from '../colors'

export const Wrapper = styled.button`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
`

export const Btn = styled.button`
  all: unset;
  box-sizing: border-box;
  background: ${colors.dark};
  border: 1px solid ${colors.dark};
  color: ${colors.light};
  font-weight: 600;
  border-radius: 6px;
  width: 45%;
  padding: 4px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const File = styled.div``