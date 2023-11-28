import { useState, useEffect } from 'react'

import Content from '../../content'
import Footer from '../../footer'
import Header from '../../header'
import Item from '../../item'
import { useGetLearningItems, useSetItem } from '../../api'
import { IPageProps, IItem } from '../../types'

import * as UI from './ui.styles'

const Learning = (props: IPageProps) => {
  const [ currentItemIdx, setCurrentItemIdx ] = useState(0)

  const { data } = useGetLearningItems()
  const { mutateAsync: editItem } = useSetItem()

  if (!data) {
    return null
  }

  const item: IItem | null = data[currentItemIdx] ?? null

  return (
    <div>
      <Header {...props} />
      <Content>
        <UI.Wrapper>
          {item ? <Item data={item} /> : <div>Nothing to learn</div>}
          {!!item && (
            <UI.BtnsWrapper>
              <UI.Btn onClick={() => {
                if (item) {
                  setCurrentItemIdx((prev) => prev + 1)
                  editItem({
                    ...item,
                    repeats: item.repeats + 1,
                    lastModified: new Date().toISOString(),
                  })
                }
              }}>
                I know
              </UI.Btn>
              <UI.Btn onClick={() => {
                if (item) {
                  setCurrentItemIdx((prev) => prev + 1)
                  editItem({
                    ...item,
                    repeats: 0,
                    lastModified: new Date().toISOString(),
                  })
                }
              }}>
                I forgot
              </UI.Btn>
            </UI.BtnsWrapper>
          )}
        </UI.Wrapper>
      </Content>
      <Footer {...props} />
    </div>
  )
}

export default Learning