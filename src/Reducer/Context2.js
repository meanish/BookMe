import React, { useState, useEffect, useContext, createContext, useReducer } from 'react';
import reducer from "./Reducer";
import { AllVal } from "../Context";


export const CardContext2 = createContext();

const Context2 = ({ children }) => {


    const { userData, setUserData } = useContext(AllVal);
    const { showHotelDetails } = userData



    const initialState = {
        data: [],
        name1: "Anish",
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        

        // if (userData.showHotelDetails === false) {
        //     const { hotel_id } = userData.clickHotel;
        //     console.log("hih", hotel_id)
        //     return (
        //         <>
        //             {setUserData({ ...userData, showHotelDetails: true, clickHotel: "" })}
        //         </>
        //     )
        // }

        const FetchMe2 = () => {
            alert();
        }
        FetchMe2();

    }, [userData])




    console.log(state)
    return (
        <CardContext2.Provider value={{ ...state }}>
            {children}
        </CardContext2.Provider>
    )
}

export default Context2