import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const AllVal = createContext({});

const Context = ({ children }) => {
  const [userData, setUserData] = useState(
    {
      location: "",
      visitDate: "",
      returnDate: "",
      adult: "2",
      children: "2",
      room: "1",
      locationDetails: "[]",
      Hotel_name: "[]",
      showhotelname: true,
      clickHotel: "",
      images: [],
      showHotelDetails: true,
      setLoading: true,
      setSingleLoading: true,
    });

  console.log(userData);

  // console.log(dest_type)


  if (userData.showhotelname === false) {
    const { city_name, dest_id, dest_type, hotels } = userData.locationDetails;
    console.log(city_name, dest_id, dest_type, hotels);

    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
      params: {
        checkout_date: `${userData.returnDate}`,                // 2022-10-01//
        units: "metric",
        dest_id: `${dest_id}`,
        dest_type: `${dest_type}`,
        locale: "en-gb",
        adults_number: `${userData.adult}`,  //2//
        order_by: "popularity",
        filter_by_currency: "AED",
        checkin_date: `${userData.visitDate}`,
        room_number: `${userData.room}`,    //1//
        children_number: `${userData.children}`, //2//
        page_number: "0",
        children_ages: "5,0",
        categories_filter_ids: "class::2,class::4,free_cancellation::1",
        include_adjacency: "true"
      },
      headers: {
        'X-RapidAPI-Key': '0d333c544cmshd7a3b9f89171a33p125322jsn844b7e83f91e',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
    };

    axios.request(options)

      .then(function (response) {

        return response.data;           //reesut array
      })

      .then((data) => {
        setUserData({
          ...userData,
          Hotel_info: data.result,
          showhotelname: true,
          setLoading: false,

        });
        // setUserdata({ ...userData, Hotel_name: data.result });
      })
      .catch(function (error) {
        setUserData({
          setLoading: false,
        });

      });
  }


  if (userData.clickHotel.length !== 0) {
    const { hotel_id, hotel_name } = userData.clickHotel;
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/photos',
      params: { locale: 'en-gb', hotel_id: `${hotel_id}` },
      headers: {
        'X-RapidAPI-Key': '136c6c0cc0msh0d899ee6da63679p1a03b1jsn45b9784dc31a',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        return response.data; //reesut array
      })

      .then((data) => {
        setUserData({
          ...userData,
          images: data,
          clickHotel: "",
          setSingleLoading: false,
        });
        // setUserdata({ ...userData, Hotel_name: data.result });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <AllVal.Provider value={{ userData, setUserData }}>
      {children}
    </AllVal.Provider>
  );
};

export default Context;



