import React from 'react'

function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 h-16 bg-blue-950 flex items-center justify-between z-50'>
      <a href='/' className='text-white font-extrabold text-2xl'>
        <div className='flex items-center m-2 p-2'>
            <p>JI</p>
            <span className='ml-4'>
          Jasmine Ismail
        </span>
        </div>
      </a>
      <nav>
          <ul className='flex justify-end space-x-4 mr-4'>
            <li>
              <a href='/about' className='text-white hover:text-gray-300 transition-colors'>
                About
              </a>
            </li> 
            
            <li>
              <a href='/skills' className='text-white hover:text-gray-300'>
                Skills
              </a>  
            </li>
            <li>
              <a href='/projects' className='text-white hover:text-gray-300'>
                Projects
              </a>
            </li>
            <li>
              <a href='/experience' className='text-white hover:text-gray-300'>
                Experience
              </a>
            </li>
            <li>
              <a href='/contact' className='text-white hover:text-gray-300'>
                Contact
              </a>
            </li>
          </ul> 
        </nav>
    </div>
  )
}

export default Header