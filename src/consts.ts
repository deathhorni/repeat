import { QueryClient } from 'react-query'

import { IItem } from './types'

export const DEFAULT_ITEM: IItem = {
  id: 'unknown',
  children: [],
  key: '',
  value: '',
  repeats: 0,
  repeatable: true,
  lastModified: new Date().toISOString(),
  death: null,
}

export const DEFAULT_ROOT: IItem = {
  id: 'root',
  children: [],
  key: '',
  value: '',
  repeatable: false,
  repeats: 0,
  lastModified: new Date().toISOString(),
  death: null,
}

export const queryClient = new QueryClient()