import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
return (
    <div className='prodcuto'>
        <div className='productoDetaller'>
        <img src={producto.imagen} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <Link className="verMas" to={ `/item/${producto.id}`}>Ver Mas</Link>
        </div>
    </div>
</div>
)
}


export default Item