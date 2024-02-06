import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom" ;
import Home from "./home/Home-BannerNav";
import AboutUs from "./aboutUs/AboutUs";
import OurServices from "./ourServices/ourServices";
import OurCarColumn from "./OurCarColumn/ourCarColumn";
import ContactUs from "./contactUs/contactUs";
import Tutorial from "./toutorial/tourials";

export default function RouterSwitch() {
    

    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/aboutUs" element={<AboutUs/>}/>
                    <Route path="/ourServices" element={<OurServices/>}/>
                    <Route path="/OurCarColumn" element={<OurCarColumn/>}/>
                    <Route path="/contactUs" element={<ContactUs/>}/>
                    <Route path="/toutorial" element={<Tutorial/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}