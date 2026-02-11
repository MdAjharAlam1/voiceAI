
import { useState } from 'react'
import LayoutContainer from './shared/LayoutContainer'
import Logo from './shared/Logo'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
        <header className="shadow-sm py-3 relative">
            <LayoutContainer>
                <div className='flex items-center justify-between '>
                    <Logo/>
                    <div className='hidden sm:flex font-medium items-center gap-6 text-slate-600'>
                        <Link className='hover:underline hover:text-blue-400' to="/">Home</Link>
                        <Link className='hover:underline hover:text-blue-400' to="/">Features</Link>
                        <Link className='hover:underline hover:text-blue-400' to="/">Pricing</Link>
                        <Link className='hover:underline hover:text-blue-400' to="/">Contact</Link>
                    </div>
                    
                    {/* hamburger button */}
                    <button
                        onClick={()=> setOpen(!open)}
                        className='sm:hidden text-slate-600'
                    >
                        { open ? <X size={26}/> : <Menu size= {26} />}
                    </button>
                </div>

            </LayoutContainer>

            {/* mobile menu */}

            {
            open && (
                <div className=' sm:hidden abosolute bg-white top-full w-full left-0 border-t border-gray-200 transition'>
                    <div className='flex flex-col font-medium px-6 py-6 gap-6 text-slate-600 text-lg'>
                        <Link onClick={()=> setOpen(false)} className='hover:underline hover:text-blue-400' to="/">Home</Link>
                        <Link onClick={()=> setOpen(false)} className='hover:underline hover:text-blue-400' to="/">Features</Link>
                        <Link onClick={()=> setOpen(false)} className='hover:underline hover:text-blue-400' to="/">Pricing</Link>
                        <Link onClick={()=> setOpen(false)} className='hover:underline hover:text-blue-400' to="/">Contact</Link>
                    </div>
                </div>
            )
        }
        </header>
  )
}

export default Navbar