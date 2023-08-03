import { useContext } from "react"
import { DataContext } from "./DataContext"
import { Table, Button } from "react-bootstrap"
import CartItemCounter from "./CartItemCounter"
import 'bootstrap/dist/css/bootstrap.min.css'

const CartElements = ()=> {
    const {cart, setCart} = useContext(DataContext)

    const deleteProducto = (id)=> {
        const foundId = cart.find((e)=> e.id === id)

        const newCart = cart.filter((e)=> {
            return e !== foundId
        })

        setCart(newCart)
    }

    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                    <th>Elminar</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(pro=> (
                    <tr key={pro.id}>
                        <td>{pro.nombre}</td>
                        <td>${pro.precio * pro.quanty}</td>
                        <td>
                            <img src={'http://127.0.0.1:8000/storage/'+pro.imagen} alt={pro.nombre} height={80} />
                        </td>
                        <td>
                            <CartItemCounter pro={pro} />
                        </td>
                        <td>
                            <Button variant="danger" onClick={()=> deleteProducto(pro.id)}>❌</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default CartElements