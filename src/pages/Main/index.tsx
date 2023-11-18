import BtnCopy from '../../btn-copy'
import Content from '../../content'
import Footer from '../../footer'
import Header from '../../header'
import Item from '../../item'
import { useGetChildrenItems } from '../../api'
import { IPageProps } from '../../types'

import * as UI from './ui.styles'

const Main = (props: IPageProps) => {
  const { setPath, setPage } = props

  const { data } = useGetChildrenItems('root')

  if (!data) {
    return null
  }

  return (
    <div>
      <Header {...props} />
      <Content>
        <UI.Wrapper>
          <BtnCopy />
          {data.length ? (
            data.map((item) => (
              <Item
                key={item.id}
                data={item}
                onGoIntoElement={() => { setPage('CurrentItem'); setPath(item.id) }}
              />
            ))
          ) : ''}
        </UI.Wrapper>
      </Content>
      <Footer {...props} />
    </div>
  )
}

export default Main