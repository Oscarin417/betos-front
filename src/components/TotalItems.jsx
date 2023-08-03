import { useContext } from "react"
import { DataContext } from "./DataContext"

const TotalItems = () => {
    const {cart} = useContext(DataContext)

    const itemsQuanty = cart.reduce((acc, el)=> acc + el.quanty, 0)
    return <span>{itemsQuanty}</span>
}

export default TotalItems