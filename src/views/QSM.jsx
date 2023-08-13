import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const QSM = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12} md={6}>
                    <h2>Misión</h2>
                    <p>Nuestra misión en BETO'S es brindar a nuestros clientes una amplia gama de productos cosméticos de alta calidad, promoviendo la belleza y la confianza en sí mismos, mientras cuidamos y respetamos el medio ambiente.</p>
                </Col>
                <Col xs={12} md={6}>
                    <h2>Visión</h2>
                    <p>Nuestra visión en BETO'S es convertirnos en la tienda de cosméticos líder a nivel nacional, reconocida por nuestros clientes como la mejor opción para encontrar los productos más innovadores, naturales y sostenibles, siempre ofreciendo un servicio excepcional.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Valores</h2>
                    <ul>
                        <li>Calidad: Nos esforzamos por ofrecer solo productos cosméticos de la más alta calidad, seleccionados cuidadosamente para satisfacer las necesidades de nuestros clientes.</li>
                        <li>Innovación: Buscamos constantemente nuevas tendencias y avances en la industria de la belleza para brindar a nuestros clientes opciones vanguardistas.</li>
                        <li>Sostenibilidad: Nos comprometemos a promover y ofrecer productos respetuosos con el medio ambiente, contribuyendo así a la conservación del planeta.</li>
                        <li>Confianza: Trabajamos con honestidad, transparencia y ética, fomentando la confianza mutua con nuestros clientes, proveedores y colaboradores.</li>
                        <li>Servicio al cliente: Nuestro objetivo es superar las expectativas de nuestros clientes, brindando un servicio personalizado y amable en cada interacción.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default QSM
