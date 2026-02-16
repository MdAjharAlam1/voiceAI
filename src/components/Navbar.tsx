
import { useState } from 'react'
import LayoutContainer from './shared/LayoutContainer'
import Logo from './shared/Logo'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NavLink = [
    {
        label:"Home",
        href:"/"
    },
    {
        label:"Features",
        href:"/features"
    },
    {
        label:"Pricing",
        href:"/pricing"
    },
    {
        label:"Contact",
        href:"/contact-us"
    },
    {
        label:"Voice Translator",
        href:"/voice-translator"
    },
    {
        label:" Book Appointment",
        href:"/book-appointment"
    },

]

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
        <header className="shadow-sm py-3 relative">
            <LayoutContainer>
                <div className='flex items-center justify-between '>
                    <Link to="/">
                        <Logo/>
                    </Link>
                    <div className='hidden lg:flex font-medium items-center gap-6 text-slate-600'>
                        {
                            NavLink && NavLink.map((nav, index)=>(
                                <Link key={index} className='hover:underline hover:text-blue-400' to={nav.href}>{nav.label}</Link>
                            ))
                        }
                    </div>
                    
                    {/* hamburger button */}
                    <button
                        onClick={()=> setOpen(!open)}
                        className='lg:hidden text-slate-600'
                    >
                        { open ? <X size={26}/> : <Menu size= {26} />}
                    </button>
                </div>

            </LayoutContainer>

            {/* mobile menu */}

            {
            open && (
                <div className=' lg:hidden abosolute bg-white top-full w-full left-0 border-t border-gray-200 transition'>
                    <div className='flex flex-col font-medium px-6 py-6 gap-6 text-slate-600 text-lg'>
                        {
                            NavLink.map((nav,index)=>(
                                <Link key={index} onClick={()=> setOpen(false)} className='hover:underline hover:text-blue-400' to={nav.href}>{nav.label}</Link>

                            ))
                        }
                    </div>
                </div>
            )
        }
        </header>
  )
}

export default Navbar