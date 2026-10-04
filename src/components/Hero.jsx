import React from 'react'
import { ArrowDownToLine } from 'lucide-react';
function Hero() {
  return (
    <section className='relative bg-blue-950 text-white h-screen flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-5xl font-extrabold mb-4'>Hello, I'm Jasmine Ismail</h1>
            <p className='text-xl mb-8 font-bold'>A passionate FullStack Developer</p>
            <p className='text-lg max-w-2xl'>I love creating beautiful and functional web applications using MongoDB, Express.js, React, and Node.js. Dedicated to writing modular clean code, crafting and engineering seamless digital experiences.</p>
        </div>
        <div className='mt-8 flex items-center justify-center'>
            <a href='/projects' className='bg-white text-blue-950 hover:bg-gray-300 font-bold py-2 px-4 rounded'>
                 Projects
            </a>
            <a href="/contact" className='bg-white text-blue-950 hover:bg-gray-300 font-bold py-2 px-4 rounded ml-4'>
                Contact Me
            </a>
            <a href='/resume.pdf' download="jasmine_resume.pdf" className='bg-white text-blue-950 hover:bg-gray-300 font-bold py-2 px-4 rounded ml-4 flex items-center'>
               <ArrowDownToLine className='w-5 h-5' />
               <span>Resume</span>
            </a>
        </div>
    </section>
  )
}

export default Hero