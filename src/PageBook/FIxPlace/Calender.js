import React, { useEffect, useContext } from 'react';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import Button from '@mui/material/Button';
import { AllVal } from "../../Context";

const Calender = () => {

    const [noDate, setDate] = useState("Check in - Check out");
    const [Calen, setCalen] = useState(true);
    const [tourOn, settourOn] = useState("");
    const [Done, setDone] = useState(true);

    const { userData, setUserData } = useContext(AllVal)


    const [iDate, setiDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const toDecide = () => {
        if (noDate === "Date to visit") {
            setDate("Fix Date");
            setCalen(false);
        } else if (noDate === "Fix Date") {
            setCalen(true);
            let entryDate = format(iDate[0].startDate, "yyyy-MM-dd")
            let exitDate = format(iDate[0].endDate, "yyyy-MM-dd")
            setDate(`From: ${entryDate} to: ${exitDate}`)
            setUserData({ ...userData, visitDate: entryDate, returnDate: exitDate })
        } else {
            setCalen(false);
            setDate("Fix Date");
        }
    }



    return (
        <>

            <span><Button className="decide" onClick={toDecide}>{noDate}</Button></span>


            <div className="calender">
                {Calen || <DateRange
                    editableDateInputs={true}
                    onChange={item => setiDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={iDate}
                />}
            </div>
        </>
    )

}


export default Calender;