import React from 'react'
import Landing from './features/landing'
import { About } from './features/about'
import Choose from './features/choose'
import Testimonials from './features/testimonials'

const HomePage = () => {
  return (
    <div>
      <Landing/>
      <About />
      <Choose />
      <Testimonials />
    </div>
  )
}

export default HomePage