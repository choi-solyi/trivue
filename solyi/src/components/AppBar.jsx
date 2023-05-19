import { useState } from 'react'

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Fingerprint from '@mui/icons-material/Fingerprint'
import { useNavigate } from 'react-router'

const AppBar = () => {
  const [coin, setCoin] = useState('')
  const navigate = useNavigate()

  function onKeyDownHandler(e) {
    if (e.key === 'Enter') check()
    else setCoin(e.target.value)
  }

  function check() {
    if (coin.target.value === '3592') {
      navigate('/create')
    } else {
      setCoin('')
      document.getElementById('inputcoin').value = ''
    }
  }

  return (
    <header className="xl:mx-48 lg:mx-24 md:mx-16 sm:mx-6 mx-4">
      <nav
        className="my-4 flex item-center"
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
          id="inputcoin"
          label="Insert Coin"
          variant="outlined"
          onKeyDown={onKeyDownHandler}
          onChange={val => setCoin(val)}
        />
        <IconButton
          className="order-last sm:px-5  xs:py-2"
          aria-label="fingerprint"
          color="secondary"
          onClick={check}
        >
          <Fingerprint />
        </IconButton>
      </nav>
    </header>
  )
}

export default AppBar
