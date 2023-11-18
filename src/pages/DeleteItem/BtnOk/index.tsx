import * as UI from './ui.styles'

interface IProps {
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const BtnOk = (props: IProps) => {
  const {
    className,
    children = 'Отправить',
    disabled = false,
    onClick = () => {},
  } = props

  return (
    <UI.Btn className={className} onClick={onClick} disabled={disabled}>
      {children}
    </UI.Btn>
  )
}
  
export default BtnOk