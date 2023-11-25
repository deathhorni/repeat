import useNavigation from '../utils/useNavigation'
import { useGetItemById } from '../api'
import { IHeaderProps } from '../types'

import * as UI from './ui.styles'

const Header = (props: IHeaderProps) => {
  const { path, page } = props

  const { id, returnToPrev } = useNavigation(props)
  const { data } = useGetItemById(id)

  let title = (path ? (data?.key ?? '') : 'Root')

  if (page === 'Learning') {
    title = 'Learning'
  }

  return (
    <UI.Wrapper>
      {!!path && (page !== 'Learning') && (
        <UI.ReturnBtn onClick={returnToPrev}>
          Back
        </UI.ReturnBtn>
      )}
      <UI.Title>{title}</UI.Title>
    </UI.Wrapper>
  )
}

export default Header