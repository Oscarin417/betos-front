import logo from './betosLogo.jpg'
import { Navbar, Container, Nav } from 'react-bootstrap';
import Contacto from './views/Contacto'
import Productos from './views/Productos'
import QSM from './views/QSM'
import CartContent from './components/CartContent'
import DataProvider from './components/DataContext'
import TotalItems from './components/TotalItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App () {
  return (
    <Router>
      <div>
        <DataProvider>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand as={Link} to='/'>
                <img 
                  src={logo}
                  alt='betosLogo'
                  width='30'
                />
              </Navbar.Brand>
              <Nav className='me-auto'>
                <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
                <Nav.Link as={Link} to='/qsm'>Quienes Somos</Nav.Link>
                <Nav.Link href='https://betos-shop.000webhostapp.com/login'>LogIn</Nav.Link>
                <Nav.Link href='https://betos-shop.000webhostapp.com/register'>Registro</Nav.Link>
              </Nav>
              <Navbar.Brand as={Link} to='/cart'>
                🛒
                <TotalItems />
              </Navbar.Brand>
            </Container>
          </Navbar>

          <Switch>
            <Route exact path='/'>
              <Productos />
            </Route>
            <Route path='/contacto'>
              <Contacto />
            </Route>
            <Route path='/qsm'>
              <QSM />
            </Route>
            <Route path='/cart'>
              <CartContent />
            </Route>
          </Switch>
        </DataProvider>
      </div>
    </Router>
  );
}