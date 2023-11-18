import { useEffect } from 'react'

import Content from '../../content'
import Footer from '../../footer'
import useIItemForm from '../../forms/useIItemForm'
import Header from '../../header'
import useNavigation from '../../utils/useNavigation'
import { useGetItemById, useSetItem } from '../../api'
import { IPageProps } from '../../types'

import * as UI from './ui.styles'

const EditItem = (props: IPageProps) => {
  const { path, setPage } = props

  const { id, returnDefaultPage } = useNavigation(props)
  const { data = null } = useGetItemById(id)
  const { mutateAsync: editItem } = useSetItem(id)
  const { contextHolder, disabled, onSubmit } = useIItemForm(data)

  useEffect(() => {
    if (!path) {
      setPage('Main')
    }
  }, [])

  if (!data) {
    return null
  }

  return (
    <div>
      <Header {...props} />
      <Content>
        <UI.Wrapper>
          {contextHolder.key}
          {contextHolder.value}
          {contextHolder.repeatable}
          {contextHolder.repeats}
          {contextHolder.death}
          <UI.Btns>
            <UI.Btn
              disabled={disabled}
              onClick={async () => {
                const newItem = onSubmit()

                await editItem(newItem)
                returnDefaultPage()
              }}
            >
              Edit
            </UI.Btn>
            <UI.Btn onClick={returnDefaultPage}>Cancel</UI.Btn>
          </UI.Btns>
        </UI.Wrapper>
      </Content>
      <Footer {...props} />
    </div>
  )
}

export default EditItem