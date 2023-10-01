import { useEffect, useState} from "react"
import { PedirDatos } from "../../Helpers/PedirDatos"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemLisContainer = () => {

    const [productos,setProdcutos] = useState([]);
    const [titulo,setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
        PedirDatos()
            .then((res) => {
                if (categoria){
                    setProdcutos( res.filter((prod) => prod.categoria === categoria ));
                    setTitulo(categoria)
                }else{
                    setProdcutos(res);
                    setTitulo("Productos")
                }
            })
    }, [categoria])
    
return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
    
)
}

export default ItemLisContainer