"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname, useRouter } from 'next/navigation'

function Header() {
  const router=useRouter();

  const Path2=()=>{
    router.push('/dashboard')
  }
  const Path=()=>{
    router.push('/dashboard/upgrade')
  }
    const path=usePathname();
    useEffect(() => {
       console.log(path)
    },[])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md'>
      <Image src="/logo.svg" alt="logo" width={160} height={100} />
      <ul className=' hidden md:flex gap-6'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
         ${path=='/dashboard'&&'text-primary font-bold'}`} onClick={Path2}>Dashboard</li>
        <li  className={`hover:text-primary hover:font-bold transition-all cursor-pointer
         ${path=='/dashboard/questions'&&'text-primary font-bold'}`}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
         ${path=='/dashboard/upgrade'&&'text-primary font-bold'}`} onClick={Path}>Upgrade</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
         ${path=='/dashboard/how'&&'text-primary font-bold'}`}>How it works??</li>
      </ul>
      <UserButton />
    </div>
  )
}

export default Header
