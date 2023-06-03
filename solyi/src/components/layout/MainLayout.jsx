import { Outlet } from 'react-router'
import Header from './AppBar'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
