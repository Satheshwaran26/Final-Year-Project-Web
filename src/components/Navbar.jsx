import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-neutral-900" aria-hidden="true" />
            <span className="font-extrabold tracking-tight text-neutral-900">FYP Showcase</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'}`}>Home</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'}`}>Projects</NavLink>
           <NavLink to="/booking" className={({ isActive }) => `inline-flex items-center rounded-md px-3 py-1.5 text-sm font-semibold ${isActive ? 'bg-neutral-900 text-white' : 'border border-neutral-300 text-neutral-900 hover:bg-neutral-50'}`}>Book Now</NavLink>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded border border-neutral-300 text-neutral-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-2">
            <NavLink to="/" end onClick={() => setOpen(false)} className={({ isActive }) => `block text-sm font-medium ${isActive ? 'text-neutral-900' : 'text-neutral-600'}`}>Home</NavLink>
            <NavLink to="/projects" onClick={() => setOpen(false)} className={({ isActive }) => `block text-sm font-medium ${isActive ? 'text-neutral-900' : 'text-neutral-600'}`}>Projects</NavLink>
            <NavLink to="/build-for-you" onClick={() => setOpen(false)} className={({ isActive }) => `block text-sm font-medium ${isActive ? 'text-neutral-900' : 'text-neutral-600'}`}>What We Build</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar


