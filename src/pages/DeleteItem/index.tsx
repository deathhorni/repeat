import { useEffect } from 'react'

import Content from '../../content'
import Footer from '../../footer'
import Header from '../../header'
import useNavigation from '../../utils/useNavigation'
import { IPageProps } from '../../types'

import BtnOk from './BtnOk'
import BtnCancel from './BtnCancel'

import * as UI from './ui.styles'
import { useDeleteItem } from '../../api'

const DeleteItem = (props: IPageProps) => {
  const { path, setPage } = props

  const { returnToPrev, parentId, id } = useNavigation(props)
  const { mutateAsync: deleteItem } = useDeleteItem(parentId, id)

  useEffect(() => {
    if (!path) {
      setPage('Main')
    }
  }, [])

  const stdContent = (
    <>
      <UI.Text>Are you sure?</UI.Text>
      <UI.Btns>
        <BtnCancel onClick={async () => {
          await deleteItem()
          returnToPrev()
        }}>
          Delete
        </BtnCancel>
        <BtnOk onClick={() => { setPage(!!path ? 'CurrentItem' : 'Main') }}>
          Cancel
        </BtnOk>
      </UI.Btns>
    </>
  )

  return (
    <div>
      <Header {...props} />
      <Content>
        {path !== '' && stdContent}
      </Content>
      <Footer {...props} />
    </div>
  )
}

export default DeleteItem