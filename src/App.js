import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Nav,Image } from 'react-bootstrap'

function App() {
  return (
  
    <div  className='bg-black'>
      <Router>
    <div className='bg-black' >
    <Navbar  bg="black" variant="dark">
        <Container >
        <Image className='logo' src='https://cerebriti.b-cdn.net/uploads/c8f38f4a6dc4115f5aa8e16d3f16e4a5.png'
          roundedCircle >
         
         </Image>
         
          <Navbar.Brand href="">
          

          </Navbar.Brand>
          <Nav className="  ">
            
            <Nav.Link as={Link} to='/'  >Home</Nav.Link>
            <Nav.Link as={Link} to='/about'   >About</Nav.Link>
             <Nav.Link  as={Link} to='/contact' >Contact</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
  
  <Routes>
        <Route path='/' element={<Home/>}   />
    </Routes>
  <Routes>
        <Route path='/about' element={<About/>}   />
    </Routes>
     <Routes>
        <Route path='/contact' element={<Contact/>}   />
    </Routes>
   
   </div>
   </Router>
   </div>
  )
}

export default App;

