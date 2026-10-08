import { FaArrowDown } from "react-icons/fa";
function Hero() {
  return (
    <section className='relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center bg-blue-950 px-4 pb-12 pt-20 text-center text-white sm:px-6'>
        <div className='w-full max-w-4xl'>
            <h1 className='mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl'>Hello, I'm Jasmine Ismail</h1>
            <p className='mb-6 text-lg font-bold sm:mb-8 sm:text-xl'>A passionate FullStack Developer</p>
            <p className='mx-auto max-w-2xl text-base leading-relaxed sm:text-lg'>I love creating beautiful and functional web applications using MongoDB, Express.js, React, and Node.js. Dedicated to writing modular clean code, crafting and engineering seamless digital experiences.</p>
        </div>
        <div className='mt-8 flex w-full flex-wrap items-center justify-center gap-3'>
            <a href='#projects' className='rounded bg-white px-4 py-2 font-bold text-blue-950 hover:bg-gray-300'>
                 Projects
            </a>
            <a href="#contact" className='rounded bg-white px-4 py-2 font-bold text-blue-950 hover:bg-gray-300'>
                Contact Me
            </a>
            <a href='/resume.pdf' download="jasmine_resume.pdf" className='flex items-center rounded bg-white px-4 py-2 font-bold text-blue-950 hover:bg-gray-300'>
               <FaArrowDown className='w-5 h-5' />
               <span>Resume</span>
            </a>
        </div>
    </section>
  )
}

export default Hero