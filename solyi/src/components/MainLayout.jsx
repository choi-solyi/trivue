import { Outlet } from 'react-router'
import Header from './AppBar'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default MainLayout
