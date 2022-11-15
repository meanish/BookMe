import React, { useState, useContext } from 'react';
import { AllVal } from "../../Context";

const People = () => {
    const { userData, setUserData } = useContext(AllVal)

    const [total, setTotal] = useState({
        "adult": "2",
        "children": "2",
        "room": "1",
    })

    const Record = (events) => {
        const { name, value } = events.target;
        setUserData({ ...userData, [name]: value })
        setTotal((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }

        })


    }
    return (
        <>
            <div className="number d-flex">
                <p>Adult:<input className="incre" value={total.adult} onChange={Record} name="adult" type="number" min="1"></input></p>
                <p>Child:<input className="incre" value={total.children} onChange={Record} name="children" type="number" min="0"></input></p>
                <p> No. of Rooms:<input className="incre" value={total.room} onChange={Record} name="room" type="number" min="1"></input></p>
            </div>
        </>
    )
}
export default People;
