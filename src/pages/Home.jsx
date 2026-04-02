import React from 'react'
import Landing from '../sections/landing'
import { About } from '../sections/about'
import Choose from '../sections/choose'
import Testimonials from '../sections/testimonials'
import Mode from '../sections/mode'
import { Payment } from '../sections/credit-payment'

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