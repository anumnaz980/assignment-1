import { title } from 'process'
import React from 'react'

export const metadata  = {
  title:"About us page"
}

const About = () => {
  return (
    <div className='bg-green-200 flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-5xl max-w-2xl text-center font-semibold pb-5'>About Me</h1>
        <img src="/th.jpeg" alt="Profile Picture"  className='rounded-full'/>
        <p className='text-xl max-w-2xl text-center font-serif pt-5'>I'm Anum Naz, a passionate web developer and designer dedicated to crafting seamless, user-friendly digital experiences. Currently, I'm expanding my skill set by diving into TypeScript.Next.js and other modern technologies. I bring strong expertise in HTML, CSS, and responsive design, and I'm always eager to apply my knowledge to create innovative web solutions. Let's build something amazing together!</p>
    </div>
  )
}

export default About
