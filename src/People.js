import { RecordVoiceOverTwoTone } from '@material-ui/icons';
import React, { useState } from 'react';

const People = () => {
    const [total, setTotal] = useState({
        "adult": "1",
        "children": "0",
        "room": "1",
    })
    console.log(`${total.adult}`)

    const Record = (events) => {
        const { name, value } = events.target;
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
