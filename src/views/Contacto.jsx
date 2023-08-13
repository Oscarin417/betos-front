import { Form, Container, Button, Alert, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const Contacto = () => {
    const initialState = {
        nombre: '',
        correo: '',
        mensaje: '',
    };

    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const Lol = () => {
        setFormData(initialState);
        setShowAlert(true);
    };

    return (
        <>
            <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
                El mensaje se envió con éxito 😀
            </Alert>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Contacto</h2>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="correo" value={formData.correo} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" name="mensaje" value={formData.mensaje} onChange={handleChange} />
                            </Form.Group>
                            <Button variant="success" onClick={Lol}>
                                Enviar Mensaje
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h2>Nuestra Ubicación</h2>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                title="Ubicación"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.4530057932993!2d-100.7230727240117!3d20.031459521282425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cd6727a8d4543%3A0x8fe06edff1b781d1!2sMelchor%20Ocampo%2048%2C%20Zona%20Centro%2C%2038600%20Ac%C3%A1mbaro%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1690154917783!5m2!1ses-419!2smx"
                                frameBorder="0"
                                style={{ border: 0, width: '100%' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contacto
