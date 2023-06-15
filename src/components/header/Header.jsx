import React from 'react'
import './header.css'
import CTA from './CTA'
import {IoIosBicycle} from 'react-icons/io'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Welcome To My Journey! <IoIosBicycle/></h1>
        <h2>Ich bin Sara</h2>
        <h5 className="text-bg-variant">Frontend Web Entwicklerin</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header
