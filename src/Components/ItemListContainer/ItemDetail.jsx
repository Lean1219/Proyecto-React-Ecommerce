import "./ItemDetail.css"

const ItemDetail = ({item}) => {
return (
    <div className="container">
    <div className="prodcutoDetaller">
        <img src={item.imagen} alt={item.titulo} />
        <div>
            <h3 className="titulo">{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="categoria">Categoria: {item.categoria}</p>
            <p>{item.precio}</p>
        </div>
    </div>
</div>
);
};

export default ItemDetail;
