import { IContentProps } from '../types'

import * as UI from './ui.styles'

const Content = (props: IContentProps) => {
  const { children, className } = props

  return (
    <UI.Wrapper className={className}>
      {children}
    </UI.Wrapper>
  )
}
  
export default Content