import React, { useContext, useEffect, useReducer, } from 'react';
import { CardContext2 } from './Context2';
import { AllVal } from "../Context";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Explore.css";
import Navbar from "../PageBook/Navbar";
import Footer from "../Footer"


const HotelCard = () => {
    const { state } = useLocation();
    const { hotel_name, address, review_score, review_score_word, price_breakdown, hotel_include_breakfast, is_free_cancellable, hotel_id, city, max_photo_url } = state;
    const { userData, setUserData } = useContext(AllVal)
    const History = useNavigate();

    console.log(userData.images)

    useEffect(() => {
        setUserData({ ...userData, clickHotel: state })
    }, [])

    return (
        <>
            <div className="HotelCard ">

                <p className="head">Images related to <span className="hotel-name">{hotel_name}</span> hotel</p>

                <p className="items  container">Total images: {userData.images.length} </p>
                <button className="butan" onClick={() => History(-1)}>Go Back</button>

                <div className="for-image">
                    {
                        userData.images.map((images) => {
                            const { url_1440, url_max, url_square60 } = images;
                            console.log(images)
                            return (
                                <div className="image-card">
                                    <img src={url_max} alt="" className="big-images" />
                                </div>
                            )
                        })
                    }
                </div>


            </div>

        </>)


}

export default HotelCard