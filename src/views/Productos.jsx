import {Card, Container, Button, Row, Col} from 'react-bootstrap'
import {useContext} from 'react'
import { DataContext } from '../components/DataContext'
import 'bootstrap/dist/css/bootstrap.min.css'

const Productos = ()=> {
    const {productos, buyProductos} = useContext(DataContext)

    return(
        <Container>
            <h2>Nuestros Productos</h2>
            <Row>
                {productos.map((pro)=> (
                    <Col key={pro.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={'https://betos-production.up.railway.app/storage/'+pro.imagen} height={200} alt={pro.nombre} />
                            <Card.Body>
                                <Card.Title>{pro.nombre}</Card.Title>
                                <Card.Text>${pro.precio}</Card.Text>
                                <Card.Text>{pro.descripcion}</Card.Text>
                                <Button variant='primary' onClick={()=>buyProductos(pro)}>Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Productos