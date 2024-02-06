import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar, Nav, Col, Row, Button,Form, Offcanvas, Table,    } from "react-bootstrap";
import {GlobeEuropeAfrica, Search, Facebook, Instagram, Twitter,Whatsapp, Linkedin, ChevronBarRight, Cart4} from 'react-bootstrap-icons';
import './ourCarColumn.css'
import myProductData from './product.json'
import { useState } from "react";


export default function OurCarColumn() {
    let [myCart, setMyCart] = useState([])
    const [show, setShow] = useState(false);
    const [subscription, setSubscription] = useState();
    let [myprice, setMyprice] = useState();
    let [total , setTotal ] = useState(0);


    const handleClick = (myitem) =>{
      setMyCart([...myCart,myitem])
    }

    const handleRemove = (removeItem) => {
        setMyCart(myCart.filter(item => item !== removeItem))
    }

    console.log(myCart)
    return(
        <>
            <section className="OurCarColumn">
                <Container>
                    <Navbar expand="lg" sticky="top" id="navbar" className="px-4">                            
                        <Navbar.Brand href="/" ><span id="logo">GENU</span>HIRE </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav  id="links"  className="m-auto" >
                                <Nav.Link href="/" title="Home"  className="navLinks">Home</Nav.Link>
                                <Nav.Link href="/aboutUs" title="AboutUs" className="navLinks">About Us</Nav.Link>
                                <Nav.Link href="/ourServices"title="OurServices" className="navLinks">Our Services</Nav.Link>
                                <Nav.Link href="/OurCarColumn" id="NewCars" className="navLinks">Our New Cars</Nav.Link>
                                <Nav.Link href="/contactUs" className="navLinks">Contact Us</Nav.Link>
                            </Nav>
                            <Nav  id="links"  className="m-auto" >                    
                                <Nav.Link href="#/about" title="Search" className="searchIcon"><Search/></Nav.Link>
                                <Nav.Link href="#/about" title="Search" className="searchIcon"><GlobeEuropeAfrica/></Nav.Link>
                                <Nav.Link href="#/about" title="Search" className="searchIcon my-nav-cart" onClick={() => setShow(true)}><Cart4 className="text-light"/><span>{myCart.length}</span></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>                
                    </Navbar>                    
                </Container>
            </section>
            <Container>
                <div className="OurCarColumnDescription bg-light text-center"> 
                    <h2 className="text-center pt-3">  OUR CARS PARKS </h2>
                    <p className="pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <h4 className="text-center my-4 header">OUR LATEST VEHICLES</h4>
                <Row xxl={2} lg={2} md={1} sm={1} xs={1} className="offset-1">
                    {myProductData.map((item,index,latestVehicles)=>{
                        return(
                            <div className="my-4 For_All  " key={index}>
                                <img src={item.img} alt={item.name} className="justify-content-center"/>
                                <h5 className="item-name pt-3 pb-2">{item.name}</h5>          
                                <Row md={2} lg={2} xl={2} sm={2} xs={2} className="pb-1">                                                
                                    <Col><strong>AC: </strong>{item.AC}</Col>
                                    <Col><strong>Doors: </strong> {item.doors}</Col>
                                    <Col><strong>Year: </strong>{item.year}</Col>
                                    <Col><strong>Millage:</strong> {item.millage}</Col>
                                    <Col><strong>Gearbox: </strong>{item.Gearbox}</Col>
                                    <Col><strong>Engine: </strong>{item.Engine}</Col>
                                    <Col className="text-center offset-2"><b>Price:</b> <span className="dollar">$</span><span className="itemPrice"> {item.price}</span>
                                    </Col>
                                </Row>
                                <Button className='myCarBtn btn btn-light rounded-0 mt-3  mb-4' onClick={()=>{handleClick(item)}} ><ChevronBarRight className="text-danger"/> HIRE CAR</Button>       
                            </div>
                        )
                    })}
                </Row>
                <Button className="myCartBtn btn btn-danger d-none d-lg-block" onClick={() => setShow(true)}><Cart4 className="myCartImg"/><span className="myCartNo"> {myCart.length}</span> </Button>
            </Container>
            <footer className="myFooter py-4">
                <Container className="mt-5 mb-4 text-center">
                    <h5 className="pb-3 text-light"><span id="logo">GENU</span>HIRE</h5>
                    <div className="text-center pt-1 text-light"><span>Follow us: </span> <Facebook className="text-primary"/> <Instagram className="text-primary"/> <Twitter className="text-primary"/> <Linkedin className="text-primary"/> <span> / GENUHIRE.com</span></div>
                    <div className="text-center pt-2 text-light">Contact us: <Whatsapp className="text-success"/> 09019065284</div>
                    <p className="text-light">CopyRight: All Right Reserved</p>
                </Container>
            </footer>
            <Offcanvas className='bg-light' show={show} onHide={() => setShow(false)} >
                <Offcanvas.Header closeButton ><b className="offcanvas-header">MyCart </b> </Offcanvas.Header>
                <Offcanvas.Body>
                    <section className="table-responsive">
                        <Table className="table table-responsive table-strip">
                            {myCart ? (myCart.map((element,index, myCart)=>{                        
                                return (<tbody key={index}>
                                        <tr className="myCart">
                                            <td> <img src={element.img} alt="item img" className="cartImgs"/><b className="px-1 cartName">{element.name}</b> </td>
                                            <td> ${myprice = element.price}</td> 
                                            <td>
                                                <Form.Select className="text-success bg-light border-0" required  onChange={(e) => {setSubscription(e.target.value);
                                                if (e.target.value === 'Daily') {
                                                    setMyprice(element.price *= 2 )
                                                }
                                                else if (e.target.value === 'Hourly') {
                                                    setMyprice(element.price)
                                                }
                                                else if (e.target.value === 'Weekly') {
                                                    setMyprice(element.price *= 7 )
                                                    console.log('Nan'+ myprice)
                                                } 
                                                else if (e.target.value === 'Monthly') {
                                                    console.log('Ok')
                                                } 
                                                }}>
                                                    <option>Hourly</option>
                                                    <option>Daily</option>
                                                    <option>Weekly</option>
                                                    <option>Monthly</option>
                                                </Form.Select>
                                            </td> 
                                            <td><b onClick={()=>{handleRemove(element)}} className="deleteItem text-dark">&times;</b></td>
                                            <td className="d-none">{total += myprice}</td>
                                        </tr> 
                                </tbody>)}))
                                : 
                                (<p>pls your cart is empty!</p>)
                            }  
                        </Table> 
                        <footer className="text-center"><b>Total: </b><span className="text-danger">$</span>{total}</footer>
                    </section>                
                </Offcanvas.Body>            
            </Offcanvas>
        </>
    )
}