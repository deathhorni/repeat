import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { IItem } from '../../types'
import { DEFAULT_ITEM } from '../../consts'

import * as UI from './ui.styles'

const useIItemForm = (prev: IItem | null = null) => {

  const [ formDataGetter, formDataSetter ] = useState<IItem>(() => prev ?? JSON.parse(JSON.stringify(DEFAULT_ITEM)))

  const [ annulateRepeatsGetter, annulateRepeatsSetter ] = useState(false)
  // const [        hasDeathGetter,        hasDeathSetter ] = useState(!!prev?.death)

  const disabled = !formDataGetter.key.trim()

  return {
    disabled,
    onSubmit: () => {
      const newLastModified = new Date().toISOString()
      const hasValue = !!formDataGetter.value.trim()

      return (
        prev ? {
          ...formDataGetter,
          lastModified: annulateRepeatsGetter ? newLastModified : formDataGetter.lastModified,
          repeats: annulateRepeatsGetter ? 0 : formDataGetter.repeats,
        } : {
          ...formDataGetter,
          id: uuidv4(),
          lastModified: newLastModified,
          repeatable: hasValue ? formDataGetter.repeatable : false,
        }
      )
    },
    contextHolder: {
      key: (
        <UI.InputWrapper>
          <UI.InputText>Key:</UI.InputText>
          <UI.Input
            value={formDataGetter.key}
            onChange={(evt) => { formDataSetter({ ...formDataGetter, key: evt.target.value }) }}
          />
        </UI.InputWrapper>
        
      ),
      value: (
        <UI.InputWrapper>
          <UI.InputText>Value:</UI.InputText>
          <UI.Input
            value={formDataGetter.value}
            onChange={(evt) => { formDataSetter({ ...formDataGetter, value: evt.target.value }) }}
          />
        </UI.InputWrapper>
      ),
      repeatable: (
        formDataGetter.value ? (
          <UI.CheckboxWrapperBtn onClick={() => { formDataSetter((prev) => ({ ...prev, repeatable: !prev.repeatable })) }}>
            <UI.Checkbox active={formDataGetter.repeatable} />
            <UI.CheckboxText>Repeatable</UI.CheckboxText>
          </UI.CheckboxWrapperBtn>
        ) : null
      ),
      repeats: (
        <>
          {formDataGetter.repeatable && !!prev ? (
            <UI.CheckboxWrapperBtn onClick={() => { annulateRepeatsSetter((prev) => !prev) }}>
              <UI.Checkbox active={annulateRepeatsGetter} />
              <UI.CheckboxText>Annulate repeats</UI.CheckboxText>
            </UI.CheckboxWrapperBtn>
          ) : null}
        </>
      ),
      death: (
        <>
          {/* <UI.CheckboxWrapperBtn onClick={() => { hasDeathSetter((prev) => !prev) }}>
            <UI.Checkbox active={hasDeathGetter} />
            <UI.CheckboxText>With death</UI.CheckboxText>
          </UI.CheckboxWrapperBtn> */}
        </>
      ),
    },
  }
}

export default useIItemForm