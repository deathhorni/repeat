import useNavigation from '../utils/useNavigation'
import { useGetItemById } from '../api'
import { IHeaderProps } from '../types'

import * as UI from './ui.styles'

const Header = (props: IHeaderProps) => {
  const { path } = props

  const { id, returnToPrev } = useNavigation(props)
  const { data } = useGetItemById(id)

  return (
    <UI.Wrapper>
      {!!path && (
        <UI.ReturnBtn onClick={returnToPrev}>
          Back
        </UI.ReturnBtn>
      )}
      <UI.Title>{path ? (data?.key ?? '') : 'Root' }</UI.Title>
    </UI.Wrapper>
  )
}

export default Header