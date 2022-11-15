import React from "react";
import {
  Tabs as TabHead,
  TabList as Lister,
  Tab as Elements,
  TabPanel as TabBody,
} from "react-tabs";
import CardData from "../CardData";

const DestinaTabs = () => {
  return (
    <>
      <TabHead defaultIndex={0} className="tab-head">
        <Lister className="tab-title">
          <Elements className="tab-name">Regions</Elements>
          <Elements className="tab-name">Place Of Interest</Elements>
        </Lister>
        <TabBody>
          <div className="region">

            {CardData.map((Val, index) => {
              const Data = Val.Destinationtabs[0].Region;

              return (
                <div className="Place" key={index}>
                  {Data.map((AllData, index) => {
                    const { name, subname } = AllData;
                    return (
                      <div className="region-body" key={index}>
                        <div className="name">{name}</div>
                        <div className="sub-name">{subname}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}

          </div>
        </TabBody>
        <TabBody>
          <div className="interest">
            {CardData.map((Val, index) => {
              const Data = Val.Destinationtabs[0].Interest;

              return (
                <div className="Place" key={index}>
                  {Data.map((AllData, index) => {
                    const { name, subname } = AllData;
                    return (
                      <div className="region-body" key={index}>
                        <div className="name">{name}</div>
                        <div className="sub-name">{subname}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </TabBody>
      </TabHead>
    </>
  );
};

export default DestinaTabs;
