import Footer from '../../footer'
import useIItemForm from '../../forms/useIItemForm'
import Header from '../../header'
import useNavigation from '../../utils/useNavigation'
import { useAddChildItem } from '../../api'
import { IPageProps } from '../../types'

import * as UI from './ui.styles'

const CreateItem = (props: IPageProps) => {
  const { contextHolder, disabled, onSubmit } = useIItemForm()
  const { returnDefaultPage, id } = useNavigation(props)

  const { mutateAsync: createItem } = useAddChildItem(id)

  return (
    <div>
      <Header {...props} />
      <UI.Content>
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

                await createItem(newItem)
                returnDefaultPage()
              }}
            >
              Create
            </UI.Btn>
            <UI.Btn onClick={returnDefaultPage}>Cancel</UI.Btn>
          </UI.Btns>
        </UI.Wrapper>
      </UI.Content>
      <Footer {...props} />
    </div>
  )
}

export default CreateItem