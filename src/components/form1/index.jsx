import React, { useState, useEffect } from "react";
import EventListener from "react-event-listener";
import "../../styles/index.scss";
import "../../styles/filters.scss";
import axiosInstance from "../../utils/axios";
import { terminalsUrl } from "../../utils/helpers";
import Filters from "../Filters";
import { TabHeader } from "../common/TabHeader";
import CheckTicket from "../CheckTicket";
import BusCharter from "../BusCharter";

const tabs = {
    bookTrip: "book-trip",
    checkTicket: "check-ticket",
    busCharter: "bus-charter"
};

const Form1 = () => {
    const [selectWrapperDiv, setSelectWrapperDiv] = useState("vm-select-field");
    const [ticketFieldWidth, setTicketFieldDiv] = useState("vm-select-field-4");
    const [error, setError] = useState(false);
    const [terminals, setTerminals] = useState([]);
    const [activeTab, setActiveTab] = useState(tabs.bookTrip);

    const fetchResources = async () => {
        try {
            // const [terminalsResult, vehicleTypesResult] = await Promise.all([
            //   axiosInstance.get(terminalsUrl),
            //   axiosInstance.get(vehicleTypesUrl)
            // ]);
            // setVehicleTypes(vehicleTypesResult.data.data);

            const terminalsResult = await axiosInstance.get(terminalsUrl);
            setTerminals(terminalsResult.data.data);
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        handleResize();
        fetchResources();
    }, []);

    const handleResize = () => {
        let elem = document.querySelector(".vm-voomsway-filter");
        const divWidth = elem.offsetWidth;
        let widthForFields = "vm-select-field";
        let widthTicketField = "vm-select-field-4";
        if (divWidth > 767 && divWidth < 1024) {
            widthForFields = "vm-select-field-6";
            widthTicketField = "vm-select-field-6";
        } else if (divWidth < 768) {
            widthForFields = "vm-select-field-12";
            widthTicketField = "vm-select-field-12";
        }
        setSelectWrapperDiv(widthForFields);
        setTicketFieldDiv(widthTicketField);
    };

    return (
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-lg-6 col-sm-12 mt-5 border-2 bg-light text-white">

                    <div className="vm-voomsway-filter">
                        <EventListener target="window" onResize={handleResize} />
                        <div className="vm-tab-section">
                            <TabHeader
                                setActiveTab={setActiveTab}
                                activeStatus={activeTab === tabs.bookTrip}
                                label="Book Trip"
                                tab={tabs.bookTrip}
                            />
                            <TabHeader
                                setActiveTab={setActiveTab}
                                activeStatus={activeTab === tabs.busCharter}
                                label="Bus Charter"
                                tab={tabs.busCharter}
                            />
                            <TabHeader
                                setActiveTab={setActiveTab}
                                activeStatus={activeTab === tabs.checkTicket}
                                label="Check Ticket"
                                tab={tabs.checkTicket}
                            />
                        </div>
                        <React.Fragment>
                            {activeTab === tabs.bookTrip && (
                                <Filters terminals={terminals} selectWrapperDiv={selectWrapperDiv} />
                            )}
                            {activeTab === tabs.busCharter && (
                                <BusCharter
                                    terminals={terminals}
                                    selectWrapperDiv={selectWrapperDiv}
                                />
                            )}
                            {activeTab === tabs.checkTicket && (
                                <CheckTicket ticketFieldWidth={ticketFieldWidth} />
                            )}
                        </React.Fragment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form1;
