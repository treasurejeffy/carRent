import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar, Nav, Col, Row, Accordion, FormControl, Button, CardImg   } from "react-bootstrap";
import {AirplaneEnginesFill, DatabaseDash, GlobeEuropeAfrica, Search, Server, Facebook, Instagram, Twitter,Whatsapp, Linkedin, CarFrontFill, UniversalAccess, Gear} from 'react-bootstrap-icons';
import Carousel from "react-multi-carousel";
import './ourServices.css';
import Suvbenz from '../carImages/suvbenz.jpg';
import Nissan from '../carImages/bug.png';
import RR from '../carImages/rollsRoyces.jpg';
import lambo from '../carImages/lambo.jpg';
import Map from '../carImages/Map.jpg';

export default function OurServices(props) {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, d efault to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1// optional, default to 1.
        }
    };

    return(
        <>
            <section className="OurServices">
                <Container>
                    <Navbar expand="lg" sticky="top" id="navbar" className="px-4">                            
                        <Navbar.Brand href="/" ><span id="logo">GENU</span>HIRE </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav  id="links"  className="m-auto" >
                                <Nav.Link href="/" title="Home"  className="navLinks">Home</Nav.Link>
                                <Nav.Link href="/aboutUs" title="AboutUs" className="navLinks">About Us</Nav.Link>
                                <Nav.Link href="/ourServices"title="OurServices" id="ourserviceLink" className="navLinks">Our Services</Nav.Link>
                                <Nav.Link href="/OurCarColumn" className="Our New Cars">Our New Cars</Nav.Link>
                                <Nav.Link href="/contactUs" className="navLinks">Contact Us</Nav.Link>
                            </Nav>
                            <Nav  id="links"  className="m-auto" >                    
                                <Nav.Link href="#/about" title="Search" className="searchIcon"><Search/></Nav.Link>
                                <Nav.Link href="#/about" title="conutry" className="searchIcon"><GlobeEuropeAfrica/></Nav.Link>
                                <Nav.Link href="#/about" title="#" className="searchIcon"><DatabaseDash/></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>                
                    </Navbar>                    
                </Container>
            </section>
            <Container>
                <div className="OurServicesDescription bg-light text-center"> 
                    <h2 className="text-center pt-3">  OUR SERVICES </h2>
                    <p className="pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <Row xl={2} lg={2} md={2} sm={1} xs={1} >
                    <Col>
                        <div className="border m-2">
                            <h5 className="px-3 pt-4 pb-3 carDealer"><Server className="mx-3 text-danger"/>  Car dealer number one for Nigeria </h5> 
                            <article className="px-4 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border  m-2">
                            <h5 className="px-3 pt-4 pb-3 carDealer"><AirplaneEnginesFill className="mx-3 text-danger"/> We are about your security in our cars </h5>
                            <article className="px-4 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border  m-2">
                            <h5 className="px-3 pt-4 pb-3 carDealer"><CarFrontFill className="mx-3  text-danger"/>  We offer you clean CARS </h5>
                            <article className="px-4 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border  m-2">
                            <h5 className="px-3 pt-4 pb-3 carDealer"><Gear className="mx-3 text-danger"/>  Best affordable prices for you </h5> 
                            <article className="px-4  pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. ulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border  m-2">
                            <h5 className="px-3 pt-4 pb-3 carDealer"><UniversalAccess className="mx-3 text-danger"/> We offer you driver to each of our CARS!  </h5> 
                            <article className="px-4 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border  m-2">
                            <h5 className="px-3 pt-4 pb-3 carDealer"><GlobeEuropeAfrica className="mx-3 text-danger"/> We offer are services everywhere in Nigeria </h5>
                            <article className="px-4 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                </Row>
                <Row xl={2} lg={2} md={2} sm={1} xs={1} className="accordions">
                    <Col><img src={Suvbenz} alt="img" className="img-fluid px-2"/></Col>
                    <Col>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are GENUHIRE all About</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi u                            
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Lorem ipsum dolor sit amet, consectetur </Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <Row className="newsletters">
                    <Col><h4>SIGN UP TO OUR NEWSLETTERS</h4></Col>
                    <Col><FormControl type="text" required placeholder="Email Address"  className="input"/></Col>
                    <Col><Button className="btn btn-danger">SIGN UP NOW!</Button></Col>                
                </Row>
                <Row className="gallery">
                    <h3 className="text-center pb-4">CHECK OUR GALLERY</h3>                
                    <Carousel
                        swipeable={false}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={props.deviceType !== "mobile" ? true : false}
                        keyBoardControl={true}
                        customTransition="all .5"
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        centerMode={true} 
                        >
                        <CardImg src={RR} alt="img" className="img-fluid px-1"/>
                        <CardImg src={Suvbenz} alt="img" className="img-fluid px-1"/>
                        <CardImg src={Nissan} alt="img" className="img-fluid px-1"/>
                        <CardImg src={lambo} alt="img" className="img-fluid px-1"/>
                    </Carousel>                
                </Row>
                <Row className="location-map">
                    <h3 className="text-center">WHERE YOU CAN FIND US</h3>
                    <img src={Map}  alt="nigeriamap"/>
                </Row>

            </Container>
            <footer className="myFooter py-4">
                <Container className="mt-5 mb-4 text-center">
                    <h5 className="pb-3 text-light"><span id="logo">GENU</span>HIRE</h5>
                    <div className="text-center pt-1 text-light"><span>Follow us: </span> <Facebook className="text-primary"/> <Instagram className="text-primary"/> <Twitter className="text-primary"/> <Linkedin className="text-primary"/> <span> / GENUHIRE.com</span></div>
                    <div className="text-center pt-2 text-light">Contact us: <Whatsapp className="text-success"/> 09019065284</div>
                    <p className="text-light">CopyRight: All Right Reserved</p>
                </Container>
            </footer>
        </>
    )
}