import React from 'react';
import Button from '@mui/material/Button';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { Route, Routes, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container p-0">
                <div className="head-top">
                    <div className="row">
                        <div className="col-10">
                            <div className="title">BOOKME</div>
                        </div>
                        <div className="col-2 ">
                            <div className="head-register">
                                <NavLink to=""> <Button className="btn">Register</Button>
                                </NavLink>
                                <NavLink to=""><Button className="btn">Login</Button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose-one">
                    <div className="row">
                        <div className="col-12 w-100">
                            <NavLink className="choose" to="" ><Button id="selected" ><HotelIcon className="icon-me" /> Stays</Button></NavLink>
                            <NavLink className="choose" to=""><Button><FlightIcon className="icon-me" />Flights</Button></NavLink>
                            <NavLink className="choose" to=""><Button><DirectionsCarIcon className="icon-me" />Car Rentals </Button></NavLink>
                            <NavLink className="choose" to=""><Button><AccessibilityIcon className="icon-me" />Atrractions </Button></NavLink>
                            <NavLink className="choose" to=""><Button><ConnectingAirportsIcon className="icon-me" />Airport taxis </Button></NavLink>

                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default Navbar   