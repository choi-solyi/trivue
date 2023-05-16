import { useState } from 'react'

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Fingerprint from '@mui/icons-material/Fingerprint'
import { useNavigate } from 'react-router'

const AppBar = () => {
  const [coin, setCoin] = useState('')
  const navigate = useNavigate()

  function onKeyDonwHandler(e) {
    if (e.key === 'Enter') {
      if (e.target.value === '3592') {
        navigate('/create')
      } else {
        setCoin('')
        e.target.value = ''
      }
    } else {
      setCoin(e.target.value)
    }
  }
  function eventHandler() {
    if (coin.target.value === '3592') {
      navigate('/create')
    } else {
      setCoin('')
      document.getElementById('text-field').value = ''
    }
  }

  return (
    <header className="bg-my-color">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Choi Solyi</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <TextField
          size="small"
          id="outlined-basic"
          label="Insert Coin"
          variant="outlined"
          onKeyDown={onKeyDonwHandler}
        />
        <IconButton
          className="order-last sm:px-5  xs:py-2"
          aria-label="fingerprint"
          color="secondary"
          onClick={eventHandler}
        >
          <Fingerprint />
        </IconButton>
      </nav>
    </header>
  )
}

export default AppBar
