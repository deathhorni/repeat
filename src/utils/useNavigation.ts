import { useMemo } from 'react'

import { IPageProps } from '../types'

const useNavigation = (props: IPageProps) => {
  const { path, setPath, setPage } = props

  const pageData = useMemo(() => {
    const splittedPath = path.split('/')

    const id = splittedPath.at(-1) || 'root'

    const parentPathChain = splittedPath.slice(0, splittedPath.length - 1)

    const parentId = parentPathChain.at(-1) ?? 'root'

    return {
      parentPath: parentPathChain.join('/'),
      id,
      parentId,
    }
  }, [path])

  const returnDefaultPage = () => {
    setPage(path ? 'CurrentItem' : 'Main')
  }

  const returnToPrev = () => {
    if (pageData.parentPath) {
      setPage('CurrentItem')
      setPath(pageData.parentPath)
    } else {
      setPage('Main')
      setPath('')
    }
  }

  const goToChild = (id: string) => {
    const newPath = `${path}/${id}`

    setPage('CurrentItem')
    setPath(newPath)
  }

  return {
    ...pageData,
    returnToPrev,
    returnDefaultPage,
    goToChild,
  }
}

export default useNavigation