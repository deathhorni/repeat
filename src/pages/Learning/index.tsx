import Content from '../../content'
import Footer from '../../footer'
import Header from '../../header'
import { IPageProps } from '../../types'

const Learning = (props: IPageProps) => {
  const { page, path, setPath, setPage } = props

  return (
    <div>
      <Header {...props} />
      Learning
      <Footer {...props} />
    </div>
  )
}

export default Learning