import styled, { css } from 'styled-components'

import colors from '../../colors'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const InputText = styled.div`
  color: ${colors.dark};
  font-weight: 600;
  cursor: default;
  &::selection {
    background: ${colors.light};
    color: ${colors.dark};
  }
`

export const Input = styled.textarea.attrs({ spellCheck: false })`
  resize: none;
  outline: none;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  background: ${colors.light};
  color: ${colors.dark};
  font-weight: 600;
  text-decoration: none;
  min-height: 100px;
  padding: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
  &::selection {
    color: ${colors.light};
    background: ${colors.dark};
  }
`

export const DateInput = styled.input.attrs({ spellCheck: false })`
  outline: none;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  background: ${colors.light};
  color: ${colors.dark};
  font-weight: 600;
  text-decoration: none;
  padding: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
  &::selection {
    color: ${colors.light};
    background: ${colors.dark};
  }
`

interface ICheckboxProps {
  active: boolean
}

export const Checkbox = styled.div<ICheckboxProps>`
  position: relative;
  width: 20px;
  height: 20px;
  background: ${colors.light};
  border: 2px solid ${colors.dark};
  border-radius: 4px;
  transition: background-color 0.4s;
  &::before, &::after {
    content: "";
    position: absolute;
    display: block;
    transform-origin: top left;
    transition: opacity 0.4s, width 0.4s;
    background: ${colors.white};
    height: 2px;
    width: 1px;
    opacity: 0;
  }
  &::before {
    top: 7px;
    left: 4px;
    transform: rotate(40deg);
  }
  &::after {
    bottom: 3px;
    left: 6px;
    transform: rotate(-50deg);
  }
  ${(props) => props.active && css`
    background: ${colors.dark};
    &::before, &::after {
      opacity: 1;
    }
    &::before {
      width: 6px;
    }
    &::after {
      width: 10px;
    }
  `}
`

export const CheckboxWrapperBtn = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`

export const CheckboxText = styled.div`
  color: ${colors.dark};
  font-weight: 600;
`