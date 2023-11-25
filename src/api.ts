import { useQuery, useMutation } from 'react-query'
import moment from 'moment'

import { queryClient, DEFAULT_ROOT } from './consts'
import { IItem } from './types'

const getRoot = () => {
  const response = localStorage.getItem('root')
  const defaultStr = JSON.stringify(DEFAULT_ROOT)

  if (!response) {
    localStorage.setItem('root', defaultStr)
  }

  return response || defaultStr
}

const getItemById = (id: string) => {
  const itemStr = localStorage.getItem(id) || ''

  return itemStr ? JSON.parse(itemStr) as IItem : null
}

const setItem = (item: IItem) => {
  localStorage.setItem(item.id, JSON.stringify(item))
}

const deleteItemById = (id: string) => {
  const item = getItemById(id)

  if (item?.children.length) {
    item.children.forEach((childId) => { deleteItemById(childId) })
  }

  localStorage.removeItem(id)
}

const getChildrenById = (parentId: string) => {
  const response = parentId === 'root' ? getRoot() : localStorage.getItem(parentId) // string | null
  const result: IItem[] = []

  if (response) {
    const item = JSON.parse(response) as IItem

    item.children.forEach((innerId) => {
      const innerItem = getItemById(innerId)

      if (innerItem) {
        result.push(innerItem)
      }
    })
  }

  return result
}

export const useGetChildrenItems = (parentId: string = 'root') => {
  return useQuery<IItem[]>({
    queryKey: `/items/children/${parentId}`,
    queryFn: () => {
      return new Promise((resolve) => {
        resolve(getChildrenById(parentId)) // IItem[]
      })
    },
  })
}

export const useGetItemById = (id: string) => {
  return useQuery<IItem | null>({
    queryKey: `/items/${id}`,
    queryFn: () => {
      return new Promise((resolve) => {
        resolve(getItemById(id)) // IItem | null
      })
    },
  })
}

export const useAddChildItem = (parentId: string = 'root') => {
  return useMutation({
    mutationFn: (item: IItem) => {
      return new Promise((resolve) => {
        const parent = getItemById(parentId)

        if (parent) {
          setItem(item)
          setItem({ ...parent, children: [ ...parent.children, item.id ] })
        }

        resolve(null)
      })
    },
    mutationKey: `/items/${parentId}/add`,
    onSuccess: () => { queryClient.invalidateQueries(`/items/children/${parentId}`) },
  })
}

export const useSetItem = (id: string | null = null) => {
  return useMutation({
    mutationFn: (newItem: IItem) => {
      return new Promise((resolve) => {
        setItem(newItem)
        resolve(null)
      })
    },
    mutationKey: `/items/${id}/set`,
    onSuccess: () => { queryClient.invalidateQueries(id === null ? '/items/' : `/items/${id}`) },
  })
}

export const useDeleteItem = (parentId: string, id: string) => {
  return useMutation({
    mutationFn: () => {
      return new Promise((resolve) => {
        const parent = getItemById(parentId)

        if (parent) {
          setItem({ ...parent, children: parent.children.filter((childId) => childId !== id) })
        }

        deleteItemById(id)
        resolve(null)
      })
    },
    mutationKey: `/items/${id}/delete`,
    onSuccess: () => { queryClient.invalidateQueries('/items') },
  })
}

export const useGetLearningItems = () => {
  return useQuery({
    queryFn: () => {
      return new Promise<IItem[]>((resolve) => {
        const items = Object.values(localStorage).map((value) => JSON.parse(value)).filter((value) => {
          const item: IItem = value
  
          if (!item.repeatable) {
            return false
          }
  
          const now      = moment()
          const itemTime = moment(item.lastModified)
  
          switch (item.repeats) {
            case 0:
              return true
            case 1:
              return itemTime.add(20, 'minutes').diff(now) < 0
            case 2:
              return itemTime.add(1, 'hours').diff(now) < 0
            case 3:
              return itemTime.add(9, 'hours').diff(now) < 0
            case 4:
              return itemTime.add(1, 'days').diff(now) < 0
            case 5:
              return itemTime.add(2, 'days').diff(now) < 0
            case 6:
              return itemTime.add(6, 'days').diff(now) < 0
            case 7:
              return itemTime.add(2, 'weeks').diff(now) < 0
            case 8:
              return itemTime.add(1, 'months').diff(now) < 0
            case 9:
              return itemTime.add(2, 'months').diff(now) < 0
            case 10:
              return itemTime.add(6, 'months').diff(now) < 0
            default:
              return false
          }
        }) as IItem[]

        resolve(items)
      })
    },
  })
}