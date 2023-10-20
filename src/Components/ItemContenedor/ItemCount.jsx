import "./ItemCount.css"

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar}) => {

return (
    <div>
        <div className='itemCount' >
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className='agregarCarrito' onClick={handleAgregar}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount