import React, {
  useState, useRef,
  forwardRef,
  useImperativeHandle,
  useContext
} from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { AllVal } from "../../Context";

const libraries = ["places"];

const Map = forwardRef((props, ref) => {
  const Navigate = useNavigate();
  const Val = useRef(null);
  const { userData, setUserData } = useContext(AllVal);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAgTe_559YUkNseF03Pm_GlnqOXGcZ1vyA",
    libraries,
  });

  useImperativeHandle(ref, () => ({
    locData() {
      const form = Val.current;
      const Location = form["location"].value;
      FetchData(Location);
      Navigate("/explore");
    }
  }));


  const FetchData = (props) => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
      params: { locale: "en-gb", name: `${props}` },
      headers: {
        "X-RapidAPI-Key": "febd432570msh35ddebd056eecaap19a1d8jsndb7021d75ecc",
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setUserData({
          ...userData,
          location: props,
          locationDetails: response.data[0],
          showhotelname: false
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  if (isLoaded) {
    return (
      <>
        <form ref={Val} className="inmap" component={'div'}>
          <Autocomplete>
            <input
              type="text"
              name="location"
              ref={Val}
              className="select-place"
              placeholder="Where are you going"
            />
          </Autocomplete>
        </form>
      </>
    );
  }
});
export default Map;
