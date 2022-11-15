import React from 'react';

const Guest = ({ AllData }) => {
    const { img, name, cname, price, rating, expression, review } = AllData;
    return (
        <>
            {
                (name === "last") ?
                    (
                        <div className="last-one">
                            <div className="img-section"><img src={img} alt={name} /></div>
                            <div className="card-body">

                                <div className="expla">We have a lot more homes and apartments and we think you'll love!</div>
                                <div className="discover">Discover homes</div>

                            </div>
                        </div>
                    )

                    :
                    (
                        <div className="guest-card mb-5">
                            <div className="img-section"><img src={img} alt={name} /></div>
                            <div className="card-body">
                                <div className="country-name">
                                    <h1>{name}</h1>
                                    <h5>{cname}</h5>
                                </div>
                                <h2 className="mt-2 mb-3">Starting from NPR {price}</h2>
                                <div className="rated d-flex">
                                    <button className="number-rate">{rating}</button>
                                    <h2>{expression}</h2>
                                    <h5>{review}</h5>
                                </div>

                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Guest;