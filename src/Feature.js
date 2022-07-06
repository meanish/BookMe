import React, { useState } from 'react';




const Feature = ({ Val }) => {

    return (
        <>
            {Val.map((PreVal, index) => {
                const { id, alt, cname, forgrid, cflag, bgimg, cprop } = PreVal;
                return (
                    <div className="feature-card" key={id} id={forgrid} style=
                        {{
                            backgroundImage: `url(${bgimg})`,

                        }}>
                        <div className="card-head">
                            <h1>{cname}<span><img src={cflag} alt={alt} className="countryflag" /></span></h1>
                            <p>{cprop}</p>
                          
                        </div>

                    </div>
                )
            })
            }


        </>
    )
}
export default Feature;
