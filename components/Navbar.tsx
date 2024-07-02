"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '../constants'
import Button from './Button'
import BurgerMenu from './BurgerMenu'


const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5 bg-opacity-55'>
      <Link href="/">
      <Image src="/logo.png" alt="logo" width={232} height={62} className='lg:w-auto w-32 flex justify-center'/>
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>
      <div className='lg:flexCenter hidden'>
        <Button
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
