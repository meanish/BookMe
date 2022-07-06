import React from 'react';
import "./styles/body.scss";

const Trip = ({ Val }) => {
    return (
        <>
            {
                Val.map((Alldata, index) => {
                    const { id, position, img, head, description } = Alldata;
                    return (

                        <div className="trip-card" key={id} id={position}>

                            <img src={img} alt="a" />
                            <div className="info">
                                <h1>{head}</h1>
                                <p>{description}</p>
                            </div>
                        </div>

                    )
                })
            }

        </>
    )
}

export default Trip