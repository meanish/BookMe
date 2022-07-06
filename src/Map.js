import React, { useState, useEffect } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

const Map = () => {
  const [address, setAddress] = useState("");
  const [apilocation, setApilocation] = useState("");

  useEffect(() => {
    const Fetch = async () => {
      const options = {
        method: "GET",
        url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
        params: { locale: "en-gb", name: {address} },
        headers: {
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
          "X-RapidAPI-Key":
            "b61bc15524mshf905a160b041343p14ab9bjsne84891a40ea7",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    Fetch();
  }, [address]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAgTe_559YUkNseF03Pm_GlnqOXGcZ1vyA",
    libraries,
  });

  if (isLoaded) {
    return (
      <>
        <div className="inmap">
          <Autocomplete>
            <input
              type="text"
              onChange={(events) => setAddress(events.target.value)}
              value={address}
              className="select-place"
              placeholder="Where are you going"
            />
          </Autocomplete>
          {address ? (
            <CloseIcon className="cross" onClick={() => setAddress("")} />
          ) : null}
        </div>
      </>
    );
  }
};
export default Map;
