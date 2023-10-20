import { Link } from "react-router-dom"
import "./Navbar.css"
import CartWidget from "../ItemContenedor/CartWidget"


const Navbar = () => {
return (
    <nav className='Navbar'>
        <Link to='/' className='logo'><h1>The Pepitech</h1></Link>
    <ul className='menu'>
        <li><Link className="menuLink" to="/">Inicio</Link></li>
        <li><Link className="menuLink" to="/productos">Productos</Link></li>
        <li><Link className="menuLink" to="/productos/PC GAMER">PC Gamers</Link></li>
        <li><Link className="menuLink" to="/productos/Monitor">Monitor</Link></li>
        <li><Link className="menuLink" to="/productos/Notebook">Notebook</Link></li>
        <li><Link className="menuLink" to="/Contacto">Contacto</Link></li>
        <li>< CartWidget /></li>
    </ul>
    </nav>
)
}

export default Navbar
