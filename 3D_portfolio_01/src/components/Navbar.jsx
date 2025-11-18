import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to = "/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">SJ</p>

        </NavLink>
        <nav className="flex text-lg gap-7 font-medium"> </nav>
        <NavLink to= "/about" className={({isActive}) => isActive? 'text-blue-500' : 'text-black'}>
            About
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium"> </nav>
        <NavLink to= "/portfolio" className={({isActive}) => isActive? 'text-blue-500' : 'text-black'}>
            3D 
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium"> </nav>
        <NavLink to= "/2D" className={({isActive}) => isActive? 'text-blue-500' : 'text-black'}>
            2D 
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium"> </nav>
        <NavLink to= "/TD_TA" className={({isActive}) => isActive? 'text-blue-500' : 'text-black'}>
            TD/TA
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium"> </nav>
        <NavLink to= "/projects" className={({isActive}) => isActive? 'text-blue-500' : 'text-black'}>
            Projects
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium"> </nav>
        <NavLink to= "/contact" className={({isActive}) => isActive? 'text-blue-500' : 'text-black'}>
            Contact
        </NavLink>

        

        


    </header>

  )
}

export default Navbar