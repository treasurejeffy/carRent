import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col  } from "react-bootstrap";
import { AirplaneEnginesFill,Server, } from 'react-bootstrap-icons';
import './file.css'

export default function WelcomeAddress() {
    return(
        <section className="myWelcomeAddress">
            <Container >
                <h2 className="text-center myWelcomeAddressHeader">WELCOME <span>TO</span> GENUHIRE</h2>
                <p className="text-center my-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur consectetur nostrum veritatis magni.</p>
                <Row xl={2} lg={2} md={2} sm={1} xs={1} >
                    <Col>
                        <div className="border mb-2">
                            <h5 className="px-3 pt-3 carDealer"><Server className="mx-3 pt-2 text-danger"/>   Car dealer number one for Nigeria </h5>
                            <article className="px-4 pt-2 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                    <Col>
                        <div className="border">
                            <h5 className="px-3 pt-3 carDealer"><AirplaneEnginesFill className="mx-3 pt-2 text-danger"/> We are about your security in our cars </h5>
                            <article className="px-4 pt-2 pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, magni placeat! Excepturi quae enim cupiditate aut cumque porro maxime quam corporis amet doloremque vitae quisquam consequuntur itaque sint magni, debitis commodi voluptatibus facere? Similique tempora sequi iure ipsa maiores neque tempore libero explicabo, voluptate soluta!</article>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}