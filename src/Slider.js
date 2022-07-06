
import React, { useRef } from "react";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
    import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpBrowCard from "./ExpBrowCard";
import Guest from "./Guest";



const CustomArrows = ({ Val, show, showCard }) => {
    console.log(show)
    const slideshow = show;
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: slideshow,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: slideshow - 1,
                    infinite: false,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,

                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]

    };
    return (
        <>
            <div className="slider-main">
                 <div className="arrows">
                    <div className="left-one" onClick={() => sliderRef.current.slickPrev()}><ChevronLeftIcon className="icons" /></div>
                    <div className="right-one" onClick={() => sliderRef.current.slickNext()}><ChevronRightIcon className="icons" /></div>
                </div>
                <Slider ref={sliderRef} {...settings} className="slider-head">
                    {
                        (showCard === "ExpoCard") ?
                            (
                                Val.map((AllData, index) => {

                                    return (

                                        <ExpBrowCard
                                            AllData={AllData}
                                            key={index}
                                        />

                                    )
                                })

                            ) :
                            (
                                Val.map((AllData, index) => {

                                    return (

                                        <Guest
                                            AllData={AllData}
                                            key={index}
                                        />

                                    )
                                })
                            )
                    }


                </Slider>
            </div>
        </>
    );
}
export default CustomArrows;