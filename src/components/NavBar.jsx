import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">AG</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/aboutMe" className={({isActive})=> isActive ? 'text-blue-500':'text-black'}>
                About Me
            </NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive ? 'text-blue-500':'text-black'}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive ? 'text-blue-500':'text-black'}>
                Contact me
            </NavLink>
        </nav>
    </header>
  )
}

export default NavBar