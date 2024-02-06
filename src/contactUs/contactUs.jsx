import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar, Nav, Col, Row, Button,Form, Offcanvas, Table, NavDropdown,    } from "react-bootstrap";
import {GlobeEuropeAfrica, Search, Facebook, Instagram, Twitter,Whatsapp, Linkedin, ChevronBarRight, Cart4, Phone, CardChecklist, Envelope, GlobeCentralSouthAsia} from 'react-bootstrap-icons';
import './contactUs.css';


export default function ContactUs() {
    return(
        <>
            <section className="ContactUs">
                <Container>
                    <Navbar expand="lg" sticky="top" id="navbar" className="px-4">                            
                        <Navbar.Brand href="/" ><span id="logo">GENU</span>HIRE </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav  id="links"  className="m-auto" >
                                <Nav.Link href="/" title="Home"  className="navLinks">Home</Nav.Link>
                                <Nav.Link href="/aboutUs" title="AboutUs" className="navLinks">About Us</Nav.Link>
                                <Nav.Link href="/ourServices"title="OurServices" className="navLinks">Our Services</Nav.Link>
                                <Nav.Link href="/OurCarColumn"  className="navLinks">Our New Cars</Nav.Link>
                                <Nav.Link href="#link" className="navLinks"  id="NewCars">Contact Us</Nav.Link>
                            </Nav>
                            <Nav  id="links"  className="m-auto" >                    
                                <Nav.Link href="#/about" title="Search" className="searchIcon"><Search/></Nav.Link>
                                <NavDropdown id="navbarScrollingDropdown"> 
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>                           
                            </Nav>
                        </Navbar.Collapse>                
                    </Navbar>                    
                </Container>
            </section>
            <Container>
                <div className="text-center contacUsdescription">
                    <h2 className="pt-3">CONTACT US</h2>
                    <p className="pb-3">Lorem ipsum, dolor sit amet consectetur.</p>
                </div>
               <Row xl={2} lg={2} sm={1} md={1} xs={1} className="text-center contactDetail">
                    <Col>
                        <div className="border rounded-3 py-3 my-4">
                            <h5><GlobeCentralSouthAsia className="text-danger contactSupImg"/> Social Media</h5>
                            <article className="socialMedia"><Facebook className="text-primary"/> <Instagram className="text-primary"/> <Twitter className="text-primary"/> <Linkedin className="text-primary"/> /GENUHIRE.com</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border rounded-3 py-3 my-4">
                            <h5> <Envelope className="text-danger contactSupImg"/> Email Address</h5>
                            <article>treasurejeffy @gmail. com</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border rounded-3 py-3 my-4">
                            <h5><Whatsapp className="text-danger contactSupImg"/> Whatsapp Line</h5>
                            <article>+234(0)90 1906 5284</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border rounded-3 py-3 my-4"> 
                            <h5><Phone className="text-danger contactSupImg"/> Phone Line</h5>
                            <article>+234(0)90 1906 5284</article>                            
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