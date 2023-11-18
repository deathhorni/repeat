import { IItem } from '../types'

export interface IProps {
  data: IItem
  onGoIntoElement: (data: IItem) => void
}