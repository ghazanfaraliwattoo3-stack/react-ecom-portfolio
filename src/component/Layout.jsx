import React from 'react'
import Header from './Header'
import Footer from './Footer'
Footer
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout