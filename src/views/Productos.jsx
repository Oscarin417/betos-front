import { Card, Container, Button, Row, Col } from 'react-bootstrap'
import { useContext } from 'react'
import { DataContext } from '../components/DataContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const Productos = () => {
  const { productos, buyProductos } = useContext(DataContext)

  const handleAddToCart = (product) => {
    buyProductos(product)
    Swal.fire({
      icon: 'success',
      title: '¡Producto agregado al carrito!',
      text: `${product.nombre} ha sido agregado a tu carrito.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <Container>
      <h2 className="text-center mb-4">Nuestros Productos</h2>
      <Row xs={1} sm={2} md={3} lg={4}>
        {productos.map((pro) => (
          <Col key={pro.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={'https://betooss.000webhostapp.com/storage/' + pro.imagen}
                height={200}
                alt={pro.nombre}
              />
              <Card.Body>
                <Card.Title>{pro.nombre}</Card.Title>
                <Card.Text>${pro.precio}</Card.Text>
                <Card.Text>{pro.descripcion}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(pro)}
                  className="w-100"
                >
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Productos
