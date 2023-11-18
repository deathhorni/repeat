import { IFooterProps } from '../types'

import * as UI from './ui.styles'

const Footer = (props: IFooterProps) => {
  const { page, setPage, setPath } = props

  return (
    <UI.Wrapper>
      <UI.Btn
        disabled={page === 'Main'}
        onClick={() => { setPage('Main'); setPath('') }}
      >
        Main
      </UI.Btn>
      <UI.Btn
        disabled={page === 'CreateItem'}
        onClick={() => { setPage('CreateItem') }}
      >
        Create
      </UI.Btn>
      <UI.Btn
        disabled={page === 'EditItem'}
        onClick={() => { setPage('EditItem') }}
      >
        Edit
      </UI.Btn>
      <UI.Btn
        disabled={page === 'DeleteItem'}
        onClick={() => { setPage('DeleteItem') }}
      >
        Delete
      </UI.Btn>
      <UI.Btn
        disabled={page === 'Learning'}
        onClick={() => { setPage('Learning') }}
      >
        Learn
      </UI.Btn>
    </UI.Wrapper>
  )
}
  
export default Footer