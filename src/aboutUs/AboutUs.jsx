import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar, Nav, Col, Row   } from "react-bootstrap";
import { DatabaseDash, FiletypeWav, GlobeEuropeAfrica, Line, Search, SegmentedNav, Server, Facebook, Instagram, Twitter,Whatsapp, Linkedin, CarFrontFill, Tools, UniversalAccess, SignNoLeftTurnFill, PersonPlusFill} from 'react-bootstrap-icons';
import './AboutUs.css'

export default function AboutUs() {
    

    return(
        <>
            <section className="aboutUs">
                <Container>
                    <Navbar expand="lg" sticky="top" id="navbar" className="px-4">                            
                        <Navbar.Brand href="/" className="fw-bolder" ><span id="logo">GENU</span>HIRE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav  id="links"  className="m-auto" >
                                <Nav.Link href="/" title="You"  className="navlinks">Home</Nav.Link>
                                <Nav.Link href="/aboutUs" title="Notification" className="navlinks" id="aboutus">About Us</Nav.Link>
                                <Nav.Link href="/ourServices" title="Favourite Items" className="navlinks">Our Services</Nav.Link>
                                <Nav.Link href="/OurCarColumn" className="navlinks">Our New Cars</Nav.Link>
                                <Nav.Link href="/contactUs" className="navlinks">Contact Us</Nav.Link>
                            </Nav>
                            <Nav  id="links"  className="ms-auto" >                    
                                <Nav.Link href="#/about" title="Search" className="searchIcon"><Search/></Nav.Link>
                                <Nav.Link href="https://www.google.com/maps" title="Search" className="searchIcon"><GlobeEuropeAfrica/></Nav.Link>
                                <Nav.Link href="#/about" title="Search" className="searchIcon"><DatabaseDash/></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>                
                    </Navbar>                    
                </Container>
            </section>
            <Container>
                <div className="AboutUsDescription bg-light text-center"> 
                    <h2 className="text-center pt-3">  ABOUT US </h2>
                    <p className="pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
               <Row xl={2} lg={2} md={2} sm={1} xs={1} >
                    <Col>
                        <div className="border m-2">
                            <h6 className="px-3 pt-3 carDealer"> <Server className="mx-3  text-danger"/> Car dealer number one for Nigeria </h6>
                            <article className="px-4 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border  m-2">
                            <h6 className="px-3 pt-3 carDealer"> <CarFrontFill className="mx-3 text-danger"/> We offer you CARS on loan </h6> 
                            <article className="px-4 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border  m-2">
                            <h6 className="px-3 pt-3 carDealer"> <SignNoLeftTurnFill className="mx-1 text-danger"/> Our head office is at NO 25 APAPA street, LAGOS STATE, NIGERIA. </h6>
                            <article className="px-4 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border  m-2">
                            <h6 className="px-3 pt-3 carDealer"><PersonPlusFill className="mx-2  text-danger"/>   We are friendly to are customer's </h6> 
                            <article className="px-4  pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
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