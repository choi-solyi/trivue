import { Outlet } from 'react-router'
import Header from './AppBar'
import Footer from './SpeedDial'

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
