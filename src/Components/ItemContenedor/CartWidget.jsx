import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

const { cantidadEnCarrito } = useContext(CartContext);

return (
    <div>
        <Link className='seeCarrito' to="/carrito">🛒
        <span className='numerito'>{cantidadEnCarrito()}</span>
        </Link>
    </div>
    )   
}

export default CartWidget