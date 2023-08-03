import { Button } from "react-bootstrap"
import { useContext } from "react"
import { DataContext } from "./DataContext"
import 'bootstrap/dist/css/bootstrap.min.css'

const CartItemCounter = ({pro}) => {
    const {cart, setCart, buyProductos} = useContext(DataContext)

    const decrese = ()=> {
        const productorepeat = cart.find((item)=> item.id === pro.id)

        productorepeat.quanty !==1 && 
            setCart(cart.map((item)=> (item.id === pro.id ? {...pro, quanty: 
            productorepeat.quanty - 1} : item)))
    }
    return (
        <>
            <Button variant="success" onClick={()=> buyProductos(pro)}>+</Button>
            <p>{pro.quanty}</p>
            <Button variant="warning" onClick={()=> decrese(pro)}>-</Button>
        </>
    )
}

export default CartItemCounter