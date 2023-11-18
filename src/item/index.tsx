import { useState } from 'react'

import { IProps } from './types'
import * as UI from './ui.styles'

const Item = (props: IProps) => {
  const { data, onGoIntoElement } = props

  const [ openGetter, openSetter ] = useState(false)

  return (
    <UI.Wrapper
      open={openGetter}
      noValue={!data.value}
      onClick={() => {
        if (data.value) {
          openSetter((prev) => !prev)
        }
      }}
    >
      <UI.Text open={openGetter}>
        {openGetter ? data.value : data.key}
      </UI.Text>
      <UI.BtnOpen
        open={openGetter}
        onClick={() => { onGoIntoElement(data) }}
      >
        show
      </UI.BtnOpen>
    </UI.Wrapper>
  )
}

export default Item