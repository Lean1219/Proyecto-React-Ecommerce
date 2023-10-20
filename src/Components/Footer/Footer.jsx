import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
return (
    <footer className='Footer'>
    <div className='footerContainer'>
        <div>
        <h2 className='footerLogo'>THE PEPITECH </h2>
        <p>Explora las últimas tecnologías para una experiencia de juego inigualable.</p>
        </div>
        <div>
        <h3 className='footerEnlaces'>Enlaces Rápidos</h3>
        <ul className='footerLink'>
        <li><Link className="menuLink" to="/productos">Productos</Link></li>
        <li><Link className="menuLink" to="/Contacto">Contacto</Link></li>
        </ul>
        </div>
    </div>
    <div className='footerDerechos'>
        <p>&copy; {new Date().getFullYear()} THE PEPITECH. Todos los derechos reservados.</p>
    </div>
    </footer>
)
}

export default Footer