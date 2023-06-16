import { useState } from 'react'

// import TextField from '@mui/material/TextField'
// import IconButton from '@mui/material/IconButton'
// import Fingerprint from '@mui/icons-material/Fingerprint'
import GitHubIcon from '@mui/icons-material/GitHub';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { useNavigate } from 'react-router'

import logo from '../../assets/logo/simple-light-logo.png'
import { Button, IconButton } from '@mui/material'

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
    <header className="mx-4 xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6">
      <nav
        className="flex my-2 item-center"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Choi Solyi</span>
            <img
              className="w-auto "
              src={logo}
              alt=""
            />
          </a>
        </div>

        <div className="my-auto">
          <Button className="!text-base !tracking-wider !leading-4 !text-black hover:!text-my-color-1" >About</Button>
          <Button className="!text-base !tracking-wider !leading-4 !text-black hover:!text-my-color-1" variant="text">Tech Stack</Button>
          <Button className="!text-base !tracking-wider !leading-4 !text-black hover:!text-my-color-1" variant="text">Projects</Button>
          <Button className="!text-base !tracking-wider !leading-4 !text-black hover:!text-my-color-1" variant="text">Contact</Button>
          <IconButton><GitHubIcon/></IconButton>
          <IconButton><HistoryEduIcon/></IconButton>
        </div>


        {/* <div className="my-auto ">
          <TextField
            size="small"
            id="inputcoin"
            label="Insert Coin"
            variant="outlined"
            onKeyDown={onKeyDownHandler}
            onChange={val => setCoin(val)}
          />
        </div> */}
        {/* <IconButton
          className="order-last sm:px-5 xs:py-2"
          aria-label="fingerprint"
          color="secondary"
          onClick={check}
        >
          <Fingerprint />
        </IconButton> */}
      </nav>
    </header>
  )
}

export default AppBar
