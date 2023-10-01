import data from "../Data/data.json";

export const PedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
    })
}

export const pedirItemPorId = (id) =>{
    return new Promise ((resolve,reject) =>{

        const item = data.find((el) => el.id === id);

        if (item){
            resolve(item)
        } else{
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}