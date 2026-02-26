import React from 'react'
import Image from 'next/image'
import SignInFormClient from '@/modules/auth/componets/sign-in-form-client'

const page = () => {
  return (
   <>
   <Image src={"/login.svg"} alt='Login-Image' height={300} width={300} className='m-6 object-cover'/>
    <SignInFormClient></SignInFormClient>
   </>
  )
}

export default page







// Next.js App Router me routing file-system based hoti hai.
// Har folder jisme page.tsx hota hai, wo ek route create karta hai.
// Alag se route configuration file banane ki zarurat nahi hoti.
// undrwa.co