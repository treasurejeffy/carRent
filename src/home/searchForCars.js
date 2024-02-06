import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col,Navbar, Nav, Form, Button, Card  } from "react-bootstrap";
import { ArrowLeft, ArrowRight, ChevronRight, Download, Search } from 'react-bootstrap-icons';
import './file.css'
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  jsonData from './product.json'


export default function SearchForCars(props) {
    const [make, setMake] = useState('');
    const [brand, setBrand] = useState('');
    const [engine, setEngine] = useState('');
    const [year, setYear] = useState('');
    const [myJson, setMyJson] = useState([]);
    const [myApiData, setMyApiData] = useState([]);
    let [displayJsonData, setDisplayJsonData] = useState(true);

    
    useEffect(() => {
        setMyJson(jsonData);
    }, []);    
    let me ={Id:'82e95727-8823-42db-b826-154e3f29a20f',clientSecret:'cdaff888-1d30-4dd5-8a3b-3779c1f031c6'}

    const handSubmitForm = () => {
        fetch(`https://api.api-ninjas.com/v1/cars?make=${make}&model=${brand}&engine=${engine}&year=${year}`, {
            headers: {
                'X-Api-Key': 'vQjl87rfMUPjGXkjQTL2Qg==Dhk2gSzb1ysoLjQB'
              }
        })
          .then((response) =>response.json())
          .then(response => {
            setMyApiData(response);
            setDisplayJsonData(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Handle the error here, e.g., set an error state to display a message to the user.
          });
      };
        

    const myCart= props.myCart
    const handleClick = (myItems) =>{
        props.setMyCart([...myCart,myItems])
    }
    
    const fillteredItems = jsonData.filter(item => item.AC === undefined)

    displayJsonData= fillteredItems.map((jsonDaTa,index,myJson)=>{
        return(
            <Card key={index} className="myproduct text-center">
                <Card.Img src={jsonDaTa.img} />
                <Card.Title className="mypdTitle py-3">{jsonDaTa.name}</Card.Title>
                <Button className="btn btn-sm border-0 " onClick={()=>{ handleClick(jsonDaTa)}}>Hire Now <Download/></Button>
            </Card>
        )
    })
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, d efault to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 2// optional, default to 1.
        }
    };
    
    // console.log(myApiData)
    return(
        <>
            <section className="mySearchDisplay">
                <Form className="mySearchForm">
                    <Container className="bg-light form-search">
                        <Row lg={5} md={2} sm={2} xs={2} className="py-2 px-2">
                            <Col><Form.Control className="rounded-0 text my-1 " placeholder="Make" onChange={(e) => setMake( e.target.value)}/></Col>
                            <Col><Form.Control className="rounded-0 text my-1 " placeholder="Brand" onChange={(e) => setBrand( e.target.value)}/></Col>
                            <Col><Form.Control className="rounded-0 text my-1 " placeholder="Engine" onChange={(e) => setEngine( e.target.value)}/></Col>
                            <Col><Form.Control className="rounded-0 text my-1 " placeholder="Year" onChange={(e) => setYear( e.target.value)}/></Col>
                            <Col className="text-center"><Button className="rounded-0 px-4 py-2  my-1 d-none-sm"   typeof="submit" onClick={handSubmitForm}>SEARCH <Search/></Button></Col>
                        </Row>
                    </Container>
                </Form>
                <Container className="response pb-5 ">                    
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
                        {displayJsonData}
                        {Array.isArray(myApiData) && myApiData.map((apiData,index,myApiData)=>{
                                return(
                                    <Card key={index} className="myproduct text-center">
                                        <Card.Img src={apiData.image} alt="image" />
                                        <Card.Title className="mypdTitle py-3">{apiData.make.toUpperCase()} {apiData.model.toUpperCase()}</Card.Title>
                                        <Button className="btn btn-sm border-0 ">Hire Now <Download/></Button>
                                    </Card>
                                )
                            })
                        }
                    </Carousel>
                </Container>
            </section>
        </>
    )
}
