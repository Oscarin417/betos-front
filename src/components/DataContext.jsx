import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const DataContext = createContext()

const DataProvider = ({children})=>{
    const[productos, setProductos] = useState([])
    const[cart, setCart] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/productos')
            .then((response)=> setProductos(response.data))
            .catch((error) => console.error(error));
    },[])

    const buyProductos = (pro)=> {
        const productorepeat = cart.find((item)=> item.id === pro.id)

        if(productorepeat){
            setCart(cart.map((item)=> (item.id === pro.id ? {...pro, quanty: 
            productorepeat.quanty + 1} : item)))
        }else{
            setCart([...cart, pro])
        }
    }

    return(
        <DataContext.Provider value={{productos, cart, setCart, buyProductos}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider