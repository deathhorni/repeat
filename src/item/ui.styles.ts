import styled, { css } from 'styled-components'

import colors from '../colors'

interface IWrapperProps {
  open: boolean
  noValue: boolean
}

export const Wrapper = styled.div<IWrapperProps>`
  background: ${colors.light};
  border: 1px solid ${colors.dark};
  border-radius: 6px;
  width: 100%;
  min-height: 50px;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.open && css`
    background: ${colors.dark};
  `}
  ${(props) => props.noValue && css`
    border-width: 3px;
  `}
`

interface ITextProps {
  open: boolean
}

export const Text = styled.span<ITextProps>`
  color: ${colors.dark};
  font-weight: 600;
  ${(props) => props.open && css`
    color: ${colors.light};
  `}
`

interface IBtnOpenProps {
  open: boolean
}

export const BtnOpen = styled.button<IBtnOpenProps>`
  all: unset;
  cursor: pointer;
  height: 40px;
  color: ${colors.dark};
  ${(props) => props.open && css`
    color: ${colors.light};
  `}
`