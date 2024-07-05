"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Button from './Button'
import BurgerMenu from './BurgerMenu'


const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5 bg-opacity-55 transition-all ease-in-out duration-200'>
      <Link href="/">
      <Image src="/logo.png" alt="logo" width={232} height={62} className='lg:w-auto w-32 flex justify-center'/>
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        <li className='regular-16 font-semibold text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
          <a href="/">Home</a>
        </li>
        <li className='regular-16 font-semibold text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
          <a href="/#about-us">About</a>
        </li>
        <li className='regular-16 font-semibold text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
         <a href="/#services">Services</a>
        </li>
        <li className='regular-16 font-semibold text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
          <a href="/#testimonials">Testimonials</a>
        </li>
        <li className='regular-16 font-semibold text-gray-50 flexCenter cursor-pointer pb-1.5 px-3 transition-all hover:font-bold'>
          <a href="/contact-us">Contact</a>
        </li>
      </ul>
      <div className='lg:flexCenter hidden'>
        <Button
        href="/contact-us"
        type="button"
        title="770-781-4328"
        icon="/phone-solid.svg"
        variant="btn_dark_red"
        className="" />
      </div>
      <BurgerMenu />
    </nav>
  )
}

export default Navbar
