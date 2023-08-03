import CartElements from "./CartElements"
import CartTotal from "./CartTotal"
import { useContext } from "react"
import { DataContext } from "./DataContext"

const CartContent = ()=> {
    const {cart} = useContext(DataContext)

    return cart.length > 0 ? (
        <>
            <CartElements />
            <CartTotal />
        </>
    ): (
        <h2 className="text-center">El carrito esta vacio</h2>
    )
}

export default CartContent