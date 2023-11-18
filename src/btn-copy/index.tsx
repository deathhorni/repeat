import { useState } from 'react'

import * as UI from './ui.styles'

const BtnCopy = () => {
  const [ showFile, setShowFile ] = useState(false)

  return (
    <UI.Wrapper>
      <UI.Btn onClick={() => {
        const link = document.createElement('a')
        const file = new Blob([ JSON.stringify(localStorage) ], { type: 'text/plain;charset=utf-8' })

        link.href = URL.createObjectURL(file)
        link.download = 'memory_app_data.txt'
        link.click()
      }}>
        <span>Copy</span>
      </UI.Btn>
      <UI.Btn onClick={() => { setShowFile(!showFile) }}>
        <span>Paste</span>
      </UI.Btn>
      {showFile && (
        <UI.File>
          <input
            type="file"
            onChange={(evt) => {
              if (evt.target.files?.length && evt.target.files[0]) {
                const file = evt.target.files[0]

                file.arrayBuffer().then((buffer) => {
                  const uInt8Array = new Uint8Array(buffer)
                  let str = ''

                  Array.from(uInt8Array).forEach((charCode) => { str += String.fromCharCode(charCode) })

                  const obj = JSON.parse(str)

                  Object.entries(obj).forEach((entry) => {
                    const [ key, value ] = entry

                    if (key === 'root') {
                      const root1 = JSON.parse(value as unknown as string)
                      const root2 = JSON.parse(localStorage.getItem('root') as unknown as string)

                      const newRoot = { ...root1, children: [ ...(root1?.children ?? []), ...(root2?.children ?? []) ] }

                      localStorage.setItem(key, JSON.stringify(newRoot))

                      return
                    }

                    localStorage.setItem(key, value as unknown as string)
                  })

                  window.location.href = window.location.href
                })
              }
            }}
          />
        </UI.File>
      )}
    </UI.Wrapper>
  )
}

export default BtnCopy