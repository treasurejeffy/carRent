import React from "react";
import SearchForCars from "./searchForCars";
import WelcomeAddress from "./welcomeAddress";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col, Button, } from "react-bootstrap";
import {  ChevronRight, } from 'react-bootstrap-icons';
import './file.css'
import first from '../carImages/meeddle.png'
import second from '../carImages/meddle.png'
import third from '../carImages/star5.png'

export default function OurImportantPricesAwards () {
    
    return(
        <>
            <section className="OurImportantPricesAwards">
                <div>
                    <Container>
                        <Row>
                            <Col lg={4} xs={12} className="py-5">
                                <h3 className="text-light"><b>Our Most Important</b></h3>
                                <h5><b className="text-light"> Prices & Awards</b></h5>
                            </Col>
                            <Col lg={8} xs={12}  className="OurImportantPricesAwards2Col ">
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <main className="interiorCarBg">
                <Container>
                    <Row>
                        <Col lg={4} xs={12} className=" bg-light first-col">
                            <h4 className="pt-4 px-4"><b>We offer clean cars to everybody</b></h4>
                            <p> fast, affordable, security, quality</p>
                        </Col>
                        <Col lg={8} xs={12} className=" second-col">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, soluta voluptatem obcaecati ad, laboriosam sed saepe esse corrupti, non animi ab labore? Inventore iure tempore error, tempora, nulla aperiam repellendus recusandae itaque, dolorum excepturi odit at nihil tenetur sequi eum?</p>
                        </Col>
                    </Row>                 
                </Container>    
                <Container className="mycar">
                    <Row>
                        <div className="mycardescription row">
                            <Col lg={10}><p>starting from $299 per day</p></Col>
                            <Col lg={2}> <Button className='mycarbtn btn btn-light  rounded-0' ><ChevronRight className="text-danger"/>  HIRE A CAR</Button> </Col>
                        </div>
                    </Row>
                </Container>        
            </main>
        </>
        )
}