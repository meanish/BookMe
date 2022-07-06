import React from "react";
import Feature from "./Feature";
import "./styles/body.scss";
import CardData from "./CardData";
import { Link } from "react-router-dom";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Trip from "./Trip";
import Slider from "./Slider";
import ConnectCard from "./ConnectCard";
import RemoveCard from "./RemoveCard";
import DestinaTabs from "./DestinaTabs";

const Body = () => {
  return (
    <>
      <div className="container p-0 pt-5">
        <div className="covid-info border d-flex">
          <div className="logo">
            <LightbulbIcon color="error" />
          </div>
          <div className="info">
            Get the advice you need. Check the latest COVID-19 restrictions
            before you travel. <Link to="">Learn more</Link>
          </div>
        </div>
        <div className="country-card">
          {CardData.map((Val, index) => {
            return <Feature Val={Val.Feature} key={index} />;
          })}
        </div>
        <div className="explore">
          <div className="heading">
            <div className="title">Explore Nepal</div>
            <div className="description">
              These popular destinations have a lot to offer
            </div>
          </div>
          {CardData.map((Val, index) => {
            return (
              <Slider
                Val={Val.Explore}
                key={index}
                show={5}
                showCard="ExpoCard"
              />
            );
          })}
        </div>
        <div className="browse">
          <div className="heading">
            <div className="title">Browse by property type</div>
          </div>
          {CardData.map((Val, index) => {
            return (
              <Slider
                Val={Val.Browse}
                key={index}
                show={5}
                showCard="ExpoCard"
              />
            );
          })}
        </div>

        <div className="subscribe">
          {CardData.map((Val, index) => {
            return <RemoveCard AllData={Val.Remove} place={0} key={index} />;
          })}
        </div>

        <div className="trip">
          <div className="heading">
            <div className="title">Get inspiration for your next trip</div>
          </div>
          <div className="trip-card-main">
            {CardData.map((Val, index) => {
              return <Trip Val={Val.Trip} key={index} />;
            })}
          </div>
        </div>

        <div className="guest">
          <div className="heading">
            <div className="title">Homes guests love</div>
          </div>
          {CardData.map((Val) => {
            return <Slider Val={Val.Guest} show={4} showCard={"Hello"} />;
          })}
        </div>

        <div className="connect">
          <div className="heading">
            <div className="title">Connect with other travelers</div>
          </div>
          <div className="connect-card">
            {CardData.map((Val, index) => {
              return <ConnectCard AllData={Val.Connect} key={index} />;
            })}
          </div>
        </div>

        <div className="subscribe">
          {CardData.map((Val, index) => {
            return <RemoveCard AllData={Val.Remove} place={1} />;
          })}
        </div>
        <div className="destination-tabs">
          <div className="heading">
            <div className="title">Destinations we love</div>
          </div>
          <DestinaTabs />
        </div>
      </div>
    </>
  );
};

export default Body;
