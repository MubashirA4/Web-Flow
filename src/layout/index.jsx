import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'
import './css/style.css'

const Layout = ({children}) => {
  return (
    <div>
       <Header/>
            {children} 
       <Footer/> 
    </div>
  )
}

export default Layout