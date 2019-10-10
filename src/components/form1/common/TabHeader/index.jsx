import React from "react";

export const TabHeader = ({ activeStatus, label, tab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(tab);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div
                        className={`vm-tab-label ${activeStatus ? "vm-active-tab" : ""}`}
                        onClick={handleClick}
                    >
                        {label}
                    </div>
                </div>
            </div>
        </div>
    );
};
