import React from 'react';

const ExpBrowCard = ({ AllData }) => {
    const { img, name, prop, props2 } = AllData;
    return (
        <>
            <div className="explo-card">
                <div className="img-section"><img src={img} alt="" /></div>
                <div className="card-body">
                    <h1>{name}</h1>
                    <p>{prop}</p>
            
                </div>
            </div>
        </>
    )
}

export default ExpBrowCard;