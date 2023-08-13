import { useContext } from "react"
import { DataContext } from "./DataContext"
import { Table, Button } from "react-bootstrap"
import CartItemCounter from "./CartItemCounter"
import 'bootstrap/dist/css/bootstrap.min.css'
import './CartElements.css'; // Asegúrate de tener un archivo CSS personalizado para estilos adicionales

const CartElements = () => {
    const { cart, setCart } = useContext(DataContext)

    const deleteProducto = (id) => {
        const newCart = cart.filter((e) => e.id !== id)
        setCart(newCart)
    };

    return (
        <div className="cart-container"> {/* Clase personalizada para ajustar márgenes */}
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((pro) => (
                        <tr key={pro.id}>
                            <td>{pro.nombre}</td>
                            <td>${pro.precio * pro.quanty}</td>
                            <td>
                                <img src={'http://127.0.0.1:8000/storage/' + pro.imagen} alt={pro.nombre} height={80} />
                            </td>
                            <td>
                                <div className="action-container"> {/* Clase personalizada para alinear elementos */}
                                    <CartItemCounter pro={pro} />
                                    <Button variant="danger" onClick={() => deleteProducto(pro.id)}>❌</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CartElements
