import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Nav from './nav/nav'
import Navigation from './navigation/navigation'
import Footer from './footer/footer'

const Layout = () => {
  return (
    <BrowserRouter>
        <Nav />
        <Navigation />
        <Footer />
    </BrowserRouter>
  )
}

export default Layout