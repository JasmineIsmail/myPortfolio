import { useState } from 'react'
import { IoMenu ,IoClose} from "react-icons/io5"
const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-blue-950 px-3 sm:px-5'>
      <a href='/' className='flex items-center gap-3 text-xl font-extrabold text-white sm:gap-4 sm:text-2xl'>
        <span>JI</span>
        <span className='hidden sm:inline'>Jasmine Ismail</span>
      </a>
      <button
        type='button'
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls='primary-navigation'
        className='rounded p-2 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-white md:hidden'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoClose className='h-6 w-6' /> : <IoMenu className='h-6 w-6' />}
      </button>
      <nav
        id='primary-navigation'
        className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full border-t border-white/10 bg-blue-950 shadow-lg md:static md:block md:border-0 md:bg-transparent md:shadow-none`}
      >
        <ul className='flex flex-col px-4 py-2 md:flex-row md:items-center md:gap-5 md:p-0'>
          {navigationLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className='block rounded px-3 py-3 text-white transition-colors hover:bg-white/10 hover:text-gray-300 md:px-0 md:py-2 md:hover:bg-transparent'
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
