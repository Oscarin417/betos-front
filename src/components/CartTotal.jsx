import { useContext } from "react"
import { DataContext } from "./DataContext"

const CartTotal = () => {
    const {cart} = useContext(DataContext)

    const total = cart.reduce((acc, el)=> acc + el.precio * el.quanty, 0)

    return(
        <div>
            <h3 className="text-center">Total a pagar: ${total}</h3>
        </div>
    )
}

export default CartTotal