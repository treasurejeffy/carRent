import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container   } from "react-bootstrap";
import './file.css'

export default function NewsLetter() {

    
    return(
        <Container className="my-5 text-center">
            <div id="newsletter">
                    <h3>NEWSLETTERS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                    
            </div>
            <div className="d-flex">
                <div className="flex border ">
                    <input type="text" className="inputfield" placeholder="Type In Your Email Address"/>
                    <button type="submit" className="border-0">Suscribe</button>
                </div> 
            </div>                  
        </Container>
    )    
}