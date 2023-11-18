import { useQuery, useMutation } from 'react-query'

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

export const useSetItem = (id: string) => {
  return useMutation({
    mutationFn: (newItem: IItem) => {
      return new Promise((resolve) => {
        setItem(newItem)
        resolve(null)
      })
    },
    mutationKey: `/items/${id}/set`,
    onSuccess: () => { queryClient.invalidateQueries(`/items/${id}`) },
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

/*
now 0
20 min 1
1 hour 2
9 hours 3
24 hours 4
48 hours 5
6 days 6
2 weeks 7
1 month 8
2 months 9
6 months 10
*/
export const useGetLearningItems = () => {
  return useQuery({
    queryFn: () => {
      
    },
    queryKey: '/items/learning',
  })
}