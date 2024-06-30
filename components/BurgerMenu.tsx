import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '../constants'

const BurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <div className='relative' ref={menuRef}>
        <div className='lg:hidden cursor-pointer p-2' onClick={toggleMenu}>
            {isOpen ? (
                <div className='text-3xl font-bold'>x</div>
            ) : (
                <Image
                src="/menu.svg"
                alt="menu"
                width={32}
                height={32}
                />
            )}
        </div>
        {isOpen && (
            <ul className='absolute right-0 mt-2 w-[90vw] m-1 bg-white border border-gray-200 rounded-md shadow-lg'>
                {NAV_LINKS.map((link) => (
                <Link href={link.href}
                key={link.key}
                className='text-3xl flexCenter uppercase  px-4 py-2 text-gray-800 hover:font-bold transition duration-150'
                onClick={closeMenu}>
                    {link.label}
                </Link>
            ))}
            </ul>
        )}
    </div>
  )
}

export default BurgerMenu
