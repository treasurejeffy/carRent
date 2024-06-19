import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card, CardImg } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import './file.css'
import {  PersonCheck, PersonCircle } from "react-bootstrap-icons";

export default function CustomersReport (props) {
    
     const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3// optional, d efault to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1// optional, default to 1.
          }
    };

    return(
        <section className="customersReport">
            <Container className='pb-5'>
                <h3 className="text-center pb-4">WHAT OUR CLIENTS SAYS</h3>
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
                        <Card  className=" mx-2 border-0">
                            <CardImg src="https://media.istockphoto.com/id/1287386675/photo/beautiful-afro-woman.jpg?s=612x612&w=0&k=20&c=QF3oh2mmIhaMBylis1ny3nLyowegnLQe6KlLjR5ZyaA=" alt="client"  className="img-fluid" />
                            <article className="bg-light p-3 article"><PersonCheck className="text-dark fs-4 fw-bold"/> "Lorem consectetur adipisicing elit. Quae, soluta voluptatem obcaecati ad, laboriosam sed saepe esse "</article>
                        </Card>
                        <Card  className="mx-2 border-0">
                            <CardImg src="https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=600" alt="client"  className="img-fluid"/>
                            <article className="bg-light p-3 article"><PersonCheck className="text-secondary fs-4 fw-bold"/> "Fentore iure tempore error, tempora, nulla aperiam repellendus recusandae itaque, dolorum ex?"</article>                            
                        </Card>
                        <Card className="mx-2 border-0">
                            <CardImg src="https://media.istockphoto.com/id/1400969440/photo/emotional-african-american-man-with-african-hairstyle.jpg?s=612x612&w=0&k=20&c=4uThGdZnsVzw2pH4bpbNXT8c2PCDsJrqTaMNuHd46Qc=" alt="client" className="img-fluid" />
                            <article className="bg-light p-3 article"><PersonCheck className="text-warning fs-4 fw-bold"/> "Lorem ipsum dolor sit amet c repellendus recusandae itaque, dolorum excepturi odit at ni?"</article>
                        </Card>
                        <Card className="mx-2 border-0">
                              <CardImg src="https://media.istockphoto.com/id/1494508936/photo/happy-excited-and-phone-with-black-woman-in-studio-for-text-message-notification-and-social.jpg?s=612x612&w=0&k=20&c=9h-m2tus81J0dKxb81KEEXDy1Xoo84mZ7bjVGwDjEro=" alt=" client" className="img-fluid" />
                            <article className="bg-light p-3 article"><PersonCheck className="text-primary fs-4 fw-bold"/> "Lorem ipsum repellendus recusandae itaque, dolorum excepturi odit at nihil tenetur sequi eum eieeoeolo 7uyj?"</article>                          
                        </Card>
                        <Card className="mx-2 border-0" >
                            <CardImg src="https://images.pexels.com/photos/818819/pexels-photo-818819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="client" className="img-fluid"/>
                            <article className="bg-light p-3 article"><PersonCheck className="text-success fs-4 fw-bold"/> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, soluta voluptatem obcaecati ad, ljkklda</article>                            
                        </Card>
                </Carousel>               
            </Container>
        </section>
    )
}