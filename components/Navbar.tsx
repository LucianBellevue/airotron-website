import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '../constants'
import Button from './button'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
      <Image src="/logo.svg" alt="logo" width={74} height={29}/>
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>
      <div className='lg:flexCenter Hidden'>
        <Button
        type="button"
        title="Get Quote"
        icon=""
        variant="btn_dark_red" />
      </div>
      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  )
}

export default Navbar
