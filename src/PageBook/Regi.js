import React from 'react'
import { Route, Routes, NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
const Regi = () => {
    return (
        <>
            <div className="home-description container">
                <h1>A lifetime of discout..  Its <span className="highlight">Genious </span>???</h1>
                <p>Get rewarded for your travels - unlock instand savings of 10% or  <br />more with a freeLamboroking account....</p>
                <NavLink to=""><Button>Sign in / Register</Button></NavLink>
            </div>
        </>
    )
}

export default Regi