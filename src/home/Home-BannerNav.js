import React, {useState,useEffect} from "react";
import SearchForCars from "./searchForCars";
import WelcomeAddress from "./welcomeAddress";
import OurImportantPricesAwards from "./awards";
import MyNewestCars from "./myNewestProduct";
import CustomersReport from "./customersReport";
import NewsLetter from "./Newsletters";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar, Nav, Form, Button, Offcanvas, Table,   } from "react-bootstrap";
import {Cart2, ChevronRight, GlobeEuropeAfrica, Search} from 'react-bootstrap-icons';
import './file.css'




export default function Home () {
    const [show, setShow] = useState(false);
    const [myCart, setMyCart] = useState([]);
    const [myitemStorage, setMyitemStorage] = useState();
    const [subscription, setSubscription] = useState();
    let [myprice, setMyprice] = useState();
    let [total , setTotal ] = useState(0);

    useEffect(()=>{
        setMyitemStorage(JSON.parse(sessionStorage.getItem('mycart')))
    },[])

    const handleRemove = (removeItem) => {
        setMyCart(myCart.filter(item => item !== removeItem))
    }
    return(
        <>
            <section id="banner">
                <Container>
                    <Navbar expand="lg" sticky="top" id="navbar" className="px-4 sticky-top">                            
                        <Navbar.Brand href="#home" className="logo"><span id="logo">GENU</span>HIRE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav  id="links"  className="mx-auto md-my-3 mx-3"  >
                                <Nav.Link href="#/about" title="Home" id="home" className="navLinks">Home</Nav.Link>
                                <Nav.Link href="/aboutUs" title="AboutUs" className="navlinks">About Us</Nav.Link>
                                <Nav.Link href="/ourServices"title="Favourite Items" className="navlinks">Our Services</Nav.Link>
                                <Nav.Link href="/OurCarColumn" className="navlinks">Our New Cars</Nav.Link>
                                <Nav.Link href="/contactUs" className="navlinks">Contact Us</Nav.Link>
                            </Nav>
                            <Nav  id="links"  className="ms-auto" >
                                <Nav.Link href="#/about" title="Search" className="searchIcon"><Search/> </Nav.Link>
                                <Nav.Link href="https://www.google.com/maps" title="Africa" className="searchIcon"><GlobeEuropeAfrica/> </Nav.Link>                            
                                <Nav.Link href="#link" title="My Cart" className="ShoppingCart"  onClick={() => setShow(true)}><Cart2 className='ShoppingCartImg text-light'/><span className="bg-light text-danger rounded-5 m-1 px-2 py-1">{myCart.length}</span> </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>                
                    </Navbar>
                    <div className="mybannerdiv">
                        <div className="mybannerDescription">
                            <p>LUXURY CAR RENTAL/HIRE.</p>
                            <h2>LAMBORGHINI URUS 2023</h2>
                            <h6 className="mybannerPrice">starting from <span>N</span> 200,000 per day</h6>
                            <Button className='mybannerbtn btn btn-light  rounded-0' ><ChevronRight className="text-danger"/> SHOW PRICE</Button>                     
                        </div>
                    </div>
                </Container>   
            </section>
            <Button className="myCartBtn btn rounded-5  btn-danger" onClick={() => setShow(true)} ><Cart2 className="myCartImg"/><span className="myCartNo">{myCart.length}</span> </Button>
            <SearchForCars  myCart={myCart} setMyCart={setMyCart}/>
            <WelcomeAddress/>
            <OurImportantPricesAwards/>
            <MyNewestCars myCart={myCart} setMyCart={setMyCart} />
            <CustomersReport/>
            <NewsLetter/>
            {/* <Api/> */}
            <Footer/>
            {/* <Test/> */}
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
                                    (myitemStorage.map((element,index, myitemStorage)=>{     
                                        console.log('myele'+ element)                   
                                        return (<tbody key={index}>
                                                <tr className="myCart">
                                                    <td> <img src={element.img} alt="item img" className="cartImgs"/><b className="px-1 cartName">{element.name}</b> </td>
                                                    <td> ${myprice= element.price}</td>  
                                                    <td><b onClick={()=>{handleRemove(element)}} className="deleteItem text-dark">&times;</b></td>
                                                    <td className="d-none">{total += myprice}</td>
                                                </tr> 
                                        </tbody>)
                                    }))}  
                        </Table> 
                        <footer className="text-center"><b>Total: </b><span className="text-danger">$</span>{total}</footer>
                    </section>                
                </Offcanvas.Body>            
            </Offcanvas>
        </>
    )
}