import React, { useRef } from "react";
import "../../App.scss";
import BedIcon from "@mui/icons-material/Bed";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import Calender from "./Calender";
import People from "./People";
import Map from "./Map";

const Date = () => {
  const CallMap = useRef(null);

  const Search = () => {
    return (
      CallMap.current.locData()
    )
  }
  return (
    <>
      <div className="floating-section">
        <div className="row">
          <div className="tableinit">
            <div className="whatdoing">
              <BedIcon className="button" />
              <Map ref={CallMap} />
            </div>

            <div className="whatdoing">
              <CalendarTodayIcon className="button" />
              <Calender />
            </div>

            <div className="whatdoing">
              <EscalatorWarningIcon className="button" />
              <People />
            </div>
            <button className="search" onClick={() => Search()}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Date;
