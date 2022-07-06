import React, { useState, useEffect } from "react";
import ApiCard from "./ApiCard";

const Apok = () => {
  const [input, setInput] = useState("Kathmandu");
  const [container, setContainer] = useState([]);
  const [submited, setSubmited] = useState("");

  useEffect(() => {
    const FetchMe = async (input) => {
      const options = {
        method: "GET",
        url: "https://booking-com.p.rapidapi.com/v1/hotels/locations",
        params: { locale: "en-gb", name: "Berlin" },
        headers: {
          "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
          "X-RapidAPI-Key":
            "b61bc15524mshf905a160b041343p14ab9bjsne84891a40ea7",
        },
      };

      const response = await fetch(options);
      const responseJson = await response.json();
      if (responseJson) {
        setContainer(responseJson);
      }
    };
    FetchMe(input);
  }, [submited]);

  const Confirmed = (e) => {
    e.preventDefault();
    setSubmited(input);
  };
  return (
    <>
      <form onSubmit={Confirmed}>
        <input
          type="text"
          placeholder="Hotel name"
          value={input}
          onChange={(events) => setInput(events.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="card-Api">
        {container? (
          <ApiCard container={container} />
        ) : (
          " nodata found"
        )}
      </div>
    </>
  );
};
export default Apok;

