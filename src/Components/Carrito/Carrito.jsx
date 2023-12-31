import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import "./Carrito.css"

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

return (
    <div className='containerCarrito'>
        <h1 className='tituloCarrito'>Carrito</h1>

    {
        carrito.map((prod) => (
        <div key={prod.id}>
            <h3>{prod.titulo}</h3>
            <p>Precio Unitario: {prod.precio}</p>
            <p>Precio Total: {prod.precio * prod.cantidad}</p>
            <p>Cant: {prod.cantidad}</p>
        </div>
        ))
    }

    {
        carrito.length > 0 ?
        <>
            <h2>Precio Total: {precioTotal()}</h2>
            <button onClick={handleVaciar}>Vaciar Carrito</button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </>:
        <h2>El carrito no tiene Productos.</h2>
    }       
    </div>
    )
}

export default Carrito