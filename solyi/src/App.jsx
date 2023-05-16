// import { useState } from 'react'
import './App.css'
import Routes from './routes/index'
import '@toast-ui/editor/dist/toastui-editor.css'

// global css 적용 코드
// import GlobalStyles from '@mui/material/GlobalStyles'
// import { inputGlobal, spanGlobal } from './plugins/materialui'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <GlobalStyles styles={{ input: inputGlobal }} /> */}
      <Routes></Routes>
    </div>
  )
}

export default App
