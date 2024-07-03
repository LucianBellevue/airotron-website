"use client";
import React from 'react'
import { ServiceCards } from './ServiceCards'

const Services = () => {
  return (
    <section id="about-us" className="bg-white py-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-7xl font-bold text-gray-90">Our <span className='text-red-90'>Services</span></h2>
          <p className="text-2xl text-gray-600">Est. 1979</p>
        </div>
      </div>
      <ServiceCards />
    </section>
  )
}

export default Services
