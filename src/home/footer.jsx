import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row   } from "react-bootstrap";
import './file.css'
import { Facebook, Instagram, Linkedin, Twitter, Whatsapp } from "react-bootstrap-icons";

export default function Footer() {

    
    return(
        <footer className="myFooter py-4">
            <Container className="mt-5 mb-4 text-center">
                <h5 className="pb-3 text-light"><span id="logo">GENU</span>HIRE</h5>
                <div className="text-center pt-1 text-light"><span>Follow us: </span> <Facebook className="text-primary"/> <Instagram className="text-primary"/> <Twitter className="text-primary"/> <Linkedin className="text-primary"/> <span> / GENUHIRE.com</span></div>
                <div className="text-center pt-2 text-light">Contact us: <Whatsapp className="text-success"/> 09019065284</div>
                <p className="text-light">CopyRight: All Right Reserved</p>
            </Container>
        </footer>
    )    
}