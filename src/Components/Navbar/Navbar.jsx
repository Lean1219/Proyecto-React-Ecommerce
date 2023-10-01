import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
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
        <li className='seeCarrito' to="/cart">🛒 (5)</li>
    </ul>
    </nav>
)
}

export default Navbar
