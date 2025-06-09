"use client"
import {Button} from '../../components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';


function Header() {
  const {user,isSignedIn}=useUser();
  return (
    <div className='p-5 flex justify-between item-center border shadow-md'>
      <Image src={'/logo.png'}
      alt='logo'
      width={50}
      height={90}

      />
      <div className='ml-15 mt-3'>
        <div className='flex justify-between gap-8 font-bold text-lg  ' >
          <a  className='hover:text-emerald-500' href="/dashboard">DASHBOARD</a><a className='hover:text-emerald-500' href="/about_us">ABOUT US</a><a className='hover:text-emerald-500' href="/contact">CONTACT US</a>
        </div> 
      </div>
      {isSignedIn? 
      <UserButton/>:<Link href={'/sign-in'}><Button className="bg-emerald-600 hover:bg-emerald-300 hover:text-black">Get Started!</Button></Link>

}
    </div>
  )
}

export default Header
