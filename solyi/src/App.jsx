// import { useState } from 'react'
import './App.css'
import Routes from './routes/index'
import '@toast-ui/editor/dist/toastui-editor.css'

// global css 적용 코드
// import GlobalStyles from '@mui/material/GlobalStyles'
// import { inputGlobal, spanGlobal } from './plugins/materialui'
// container lg:px-12 md:p-8 sm:p-6 xs:p-4 p-4 mx-auto
function App() {

  return (
    <div className="container lg:px-12 md:px-8 sm:px-6 xs:px-4 mx-auto ">
      {/* <GlobalStyles styles={{ input: inputGlobal }} /> */}
      <Routes></Routes>
    </div>
  )
}

export default App
