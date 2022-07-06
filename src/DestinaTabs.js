import React from 'react';
import { Tabs as TabHead, TabList as Lister, Tab as Elements, TabPanel as TabBody } from "react-tabs";
import CardData from "./CardData";


const DestinaTabs = () => {

    return (
        <>
            <TabHead defaultIndex={0} className="tab-head" >
                <Lister className="tab-title">
                    <Elements className="tab-name">Regions</Elements>
                    <Elements className="tab-name">Place Of Interest</Elements>
                </Lister>
                <TabBody>
                    <div className="region">
                        <ul>
                            {
                                CardData.map((Val) => {
                                    const Data = Val.Destinationtabs[0].Region;
                                    console.log(Data);

                                    return (
                                        <>
                                            {
                                                Data.map((AllData, index) => {
                                                    const { name, subname } = AllData;
                                                    return (
                                                        <div className="region-body" key={index}>
                                                            <div className="name">{name}</div>
                                                            <div className="sub-name">{subname}</div>
                                                        </div>

                                                    )


                                                })
                                            }
                                        </>
                                    )

                                })
                            }

                        </ul>
                    </div>
                </TabBody>
                <TabBody>
                    <div className="interest">
                    <ul>
                            {
                                CardData.map((Val) => {
                                    const Data = Val.Destinationtabs[0].Interest;
                                    console.log(Data);

                                    return (
                                        <>
                                            {
                                                Data.map((AllData, index) => {
                                                    const { name, subname } = AllData;
                                                    return (
                                                        <div className="region-body" key={index}>
                                                            <div className="name">{name}</div>
                                                            <div className="sub-name">{subname}</div>
                                                        </div>

                                                    )


                                                })
                                            }
                                        </>
                                    )

                                })
                            }

                        </ul>

                    </div>
                </TabBody>
            </TabHead>
        </>
    )
}

export default DestinaTabs;