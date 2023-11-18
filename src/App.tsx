import { useState } from 'react'
import { QueryClientProvider } from 'react-query'

import Main from './pages/Main'
import Learning from './pages/Learning'
import EditItem from './pages/EditItem'
import DeleteItem from './pages/DeleteItem'
import CurrentItem from './pages/CurrentItem'
import CreateItem from './pages/CreateItem'
import { TPage } from './types'
import { queryClient } from './consts'
import { CurrentGlobalStyle } from './App.styles'

const App = () => {
  const [ pageGetter, pageSetter ] = useState<TPage>('Main')
  const [ pathGetter, pathSetter ] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <CurrentGlobalStyle />
        {pageGetter === 'Main'        && <Main        page={pageGetter} path={pathGetter} setPage={pageSetter} setPath={pathSetter} />}
        {pageGetter === 'Learning'    && <Learning    page={pageGetter} path={pathGetter} setPage={pageSetter} setPath={pathSetter} />}
        {pageGetter === 'EditItem'    && <EditItem    page={pageGetter} path={pathGetter} setPage={pageSetter} setPath={pathSetter} />}
        {pageGetter === 'DeleteItem'  && <DeleteItem  page={pageGetter} path={pathGetter} setPage={pageSetter} setPath={pathSetter} />}
        {pageGetter === 'CurrentItem' && <CurrentItem page={pageGetter} path={pathGetter} setPage={pageSetter} setPath={pathSetter} />}
        {pageGetter === 'CreateItem'  && <CreateItem  page={pageGetter} path={pathGetter} setPage={pageSetter} setPath={pathSetter} />}
      </div>
    </QueryClientProvider>
  )
}

export default App