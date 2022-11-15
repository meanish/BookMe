import React from 'react';
import "./App.scss";
import Body from "./Body/Body";
import Date from "./PageBook/FIxPlace/Date";
import Footer from "./Footer";
import NavbarA from "./PageBook/Navbar"
import Regi from "./PageBook/Regi"


export default function Home() {
    return (
        <>
            <div className=" nav-bar home-page ">
                <NavbarA />
                <Regi />
            </div>
            <div className="date-to-go">
                <Date />
            </div>
            <div className="body-portion">
                <Body />
            </div>
            <div className="footer">
                <Footer />
            </div>
  
        </>
    )
}
