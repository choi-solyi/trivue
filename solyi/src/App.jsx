import * as React from 'react'
import './App.css'
import Routes from './routes/index'
import '@toast-ui/editor/dist/toastui-editor.css'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material'
import Footer from './components/layout/SpeedDial'
// global css 적용 코드
// import GlobalStyles from '@mui/material/GlobalStyles'
// import { inputGlobal, spanGlobal } from './plugins/materialui'
// container lg:px-12 md:p-8 sm:p-6 xs:p-4 p-4 mx-auto

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nanum Gothic Coding',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    mycolor1: {
      main: '#755CDE',
    },
    mycolor2: {
      main: '#F6A560',
    },
    mycolor3: {
      main: '#F39E9E',
    },
    mycolor4: {
      main: '#EB7565',
    },
    mycolor5: {
      main: '#61C4B7',
    },
    mycolor6: {
      main: '#552049',
    },
    mycolor7: {
      main: '#030303',
    },
    mycolor8: {
      main: '#7A746E',
    },
  },
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="mx-auto !bg-my-bg-color">
        {/* <GlobalStyles styles={{ input: inputGlobal }} /> */}
        <Routes></Routes>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
