import styled from 'styled-components'

import colors from '../colors'

export const Wrapper = styled.div`
  position: fixed;
  top: 50px;
  width: 100%;
  height: calc(100vh - 110px);
  background: ${colors.light};
  padding: 8px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`