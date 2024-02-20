"use client"
import { navLinks } from '@/data/nav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ModeToggle } from './themetoggle'
import { MobileMenu } from './MobileMenu'
import Image from 'next/image'

const Header = () => {
    const pathname = usePathname();
  
    
  return (
    <div className='flex w-full max-w-6xl justify-between mx-auto items-center p-8'>
        <div className='flex items-center gap-2'>
            <h1 className='text-4xl font-extrabold tracking-tightest'>In<span className='text-primary'>Focus</span></h1>
        </div>
        <div className=' gap-5 hidden md:flex'>
           {navLinks.map((link) => {
              const isActive = link.route === pathname
            return (
                <li key={link.route} className={`${
                    isActive ? 'bg-primary text-white' : 'text-gray-500'
                  } flex items-center px-2 py-1 rounded-md hover:opacity-85 hover:scale-95`}>
                <Link href={link.route}>{link.label}</Link>
                </li>
            )
           })}</div>
           <div className='block md:hidden'>
            <MobileMenu />
           </div>
           <ModeToggle />
        
    </div>
  )
}

export default Header