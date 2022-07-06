import React from 'react'

const ConnectCard = ({ AllData }) => {

    return (
        <>
            {
                AllData.map((Val, index) => {
                    const { img, name, props, props2 } = Val;
                    return (
                        <div className="explo-card" key={index}>
                            <div className="img-section"><img src={img} alt={name} /></div>
                            <div className="card-body">
                                <h1>{name}</h1>
                                <p>{props}</p>
                                <p>{props2}</p>
                            </div>
                        </div>
                    )
                })
            }


        </>
    )
}

export default ConnectCard