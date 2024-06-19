import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useEffect } from "react";
import myProductData from './product.json'
import logisticsVan from './logisticsVehicles.json'
import {ChevronBarRight } from "react-bootstrap-icons";

export default function MyNewestCars(props) {
    const [key, setKey] = useState('all');
    const [latestVehicles, setLatestVehicles] = useState([]);
    const [latestLogisticsVehicles, setLatestLogisticsVehicles] = useState([])
    const [storage, setStorage] = useState([])

    const myproduct = myProductData.filter(item => item.AC !== undefined)

    useEffect(()=>{
        setLatestVehicles(myProductData);
        setLatestLogisticsVehicles(logisticsVan)
    },[])
    
    const myCart= props.myCart

    const handleClick= (myItems) => {
        props.setMyCart([...myCart,myItems])
        setStorage([...storage,myItems])
        sessionStorage.setItem('mycart',JSON.stringify(myCart))
    }

    return(
        <section className="my-new-vehicles">
            <Container>
                <h3 className="text-center">OUR LATEST VEHICLES</h3>
                <Row className="d-flex">
                    <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="tabs justify-content-center border-0 pt-4 ">                            
                        <Tab  className='tab border-0' title="All" eventKey="all" >                                
                            <Row xxl={2} lg={2} md={1} sm={1} xs={1} className="offset-1">
                                {myproduct.map((item,index,latestVehicles)=>{
                                    return(
                                        <div className="mt-5 For_All  " key={index}>
                                            <img src={item.img} alt={item.name} className=" justify-content-center  img-fluid mycars pb-2"/>
                                            <h5 className="item-name pb-3">{item.name}</h5>          
                                            <Row md={2} lg={2} xl={2} sm={2} xs={2} className="pb-1">                                                
                                                <Col><strong>AC: </strong>{item.AC}</Col>
                                                <Col><strong>Doors: </strong> {item.doors}</Col>
                                                <Col><strong>Year: </strong>{item.year}</Col>
                                                <Col><strong>Millage:</strong> {item.millage}</Col>
                                                <Col><strong>Gearbox: </strong>{item.Gearbox}</Col>
                                                <Col><strong>Engine: </strong>{item.Engine}</Col>
                                                <Col className="text-center offset-2  price"><b>Price:</b> <span className="dollar">$</span><span className="itemPrice"> {item.price}</span>
                                                </Col>
                                            </Row>
                                            <Button className='myCarBtn btn btn-light rounded-0 mt-3  mb-3' onClick={()=>{handleClick(item)}}><ChevronBarRight className="text-danger"/> HIRE CAR</Button>       
                                        </div>
                                    )
                                })}
                            </Row>
                        </Tab>
                         <Tab eventKey="logistics" title="LOGISTICS" className='tab border-0'>
                            <Row xxl={3} lg={2} md={1} sm={1} xs={1} >
                                {latestLogisticsVehicles.map((item,index,latestLogisticsVehicles)=>{
                                    return(
                                        <div className=" text-center" key={index}>
                                            <img src={item.img} alt={item.name} className=""/>
                                            <p>{item.name}</p>
                                        </div>
                                    )
                                })}
                            </Row>
                        </Tab>
                        <Tab eventKey="sports" title="SPORTS" className='tab border-0'>
                            <Row xxl={3} lg={2} md={1} sm={1} xs={1}>
                                {myProductData.map((item,index,myProductData)=>{
                                    return(
                                        <div className="border text-center" key={index}>
                                            <img src={item.img} alt={item.name} className=""/>
                                        </div>
                                    )
                                })}
                            </Row>
                        </Tab>
                        <Tab eventKey="cars" title="CARS /SUV" className='tab border-0'>
                            <Row xxl={3} lg={2} md={1} sm={1} xs={1}>
                                {myProductData.map((item,index,myProductData)=>{
                                    return(
                                        <div className="border text-center" key={index}>
                                            <img src={item.img} alt={item.name} className=""/>
                                        </div>
                                    )
                                })}
                            </Row>
                        </Tab>
                        <Tab eventKey="Bus" title="BUSES" className='tab border-0'>
                            <Row xxl={3} lg={2} md={1} sm={1} xs={1}>
                                {myProductData.map((item,index,myProductData)=>{
                                    return(
                                        <div className="border text-center" key={index}>
                                            <img src={item.img} alt={item.name} className=""/>
                                        </div>
                                    )
                                })}
                            </Row>
                        </Tab>
                    </Tabs>
                </Row>
                <div className="tri" ></div>
            </Container>
        </section>
    )
}