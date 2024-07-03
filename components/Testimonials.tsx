import React from 'react'
import { TestimonialCards } from './TestimonialCards'

const Testimonials = () => {
  return (
    <section id="testimonials" className='bg:white py-10'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-1">
          <h2 className="text-3xl md:text-7xl font-bold text-gray-90">Kind words from our <span className='text-red-90'>Clients</span></h2>
        </div>
        <TestimonialCards />
      </div>
    </section>


  )
}

export default Testimonials
