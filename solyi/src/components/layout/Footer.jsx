import { useState } from 'react'

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Fingerprint from '@mui/icons-material/Fingerprint'
import { useNavigate } from 'react-router'

import logo from '../../assets/logo/simple-light-logo.png'

const Footer = () => {
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
      ></nav>
    </header>
  )
}

export default Footer
