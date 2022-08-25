// import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Row} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AddCourse from './components/AddCourse';
import Header from "./components/Header"
import Menu from './components/Menu';
import AllCourses from './components/AllCourses';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  var btnHandle = () =>{
    toast("this is my first message");
  };
  

  return (
    <div>
    <BrowserRouter>
      <ToastContainer/>
      <Container>
        <Header />
        <Row>
          <Col md={4}>
              <Menu />
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/add-course" element={<AddCourse/>} exact />
              <Route path="/view-courses" element={<AllCourses/>} exact />
              <Route path="/about-us" element={<AboutUs/>} exact />
              <Route path="/contact-us" element={<ContactUs/>} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
</BrowserRouter>

      {/* <Home/> */}

      {/* <Course course={{title:"Django Course", description:"This is a demo"}}/>
      <Course course={{title:"Java Course", description:"This is a demo"}}/> */}

      {/* <AllCourses/>  */}

      {/* <AddCourse/> */}
    </div>
  );
}

export default App;
