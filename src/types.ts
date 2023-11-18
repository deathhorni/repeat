export type TPage = 'Main' | 'Learning' | 'CurrentItem' | 'CreateItem' | 'EditItem' | 'DeleteItem'

export interface IContentProps {
  children: React.ReactNode
  className?: string
}

export interface IHeaderProps {
  page: TPage
  path: string
  setPage: (page: TPage) => void
  setPath: (path: string) => void
}

export interface IFooterProps {
  page: TPage
  path: string
  setPage: (page: TPage) => void
  setPath: (path: string) => void
}

export interface IItem {
  id: string
  children: string[]
  key: string
  value: string
  repeatable: boolean
  repeats: number
  lastModified: string
  death: string | null
}

export interface IPageProps {
  page: TPage
  path: string
  setPage: (page: TPage) => void
  setPath: (path: string) => void
}