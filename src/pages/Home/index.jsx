import React from 'react'
import Landing from './features/landing'
import { About } from './features/about'
import Choose from './features/choose'
import Testimonials from './features/testimonials'
import Mode from './features/mode'
import { Payment } from './features/credit-payment'

const HomePage = () => {
  return (
    <div>
      <Landing/>
      <About />
      <Choose />
      <Testimonials />
      <Mode />
      <Payment />
    </div>
  )
}

export default HomePage