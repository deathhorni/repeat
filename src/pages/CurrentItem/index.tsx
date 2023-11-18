import Content from '../../content'
import Footer from '../../footer'
import Header from '../../header'
import Item from '../../item'
import useNavigation from '../../utils/useNavigation'
import { useGetChildrenItems } from '../../api'
import { IPageProps } from '../../types'

import * as UI from './ui.styles'

const CurrentItem = (props: IPageProps) => {
  const { id, goToChild } = useNavigation(props)
  const { data = [] } = useGetChildrenItems(id)

  return (
    <div>
      <Header {...props} />
      <Content>
        <UI.Wrapper>
          {data.map((item) => (
            <Item
              key={item.id}
              data={item}
              onGoIntoElement={() => { goToChild(item.id) }}
            />
          ))}
        </UI.Wrapper>
      </Content>
      <Footer {...props} />
    </div>
  )
}

export default CurrentItem