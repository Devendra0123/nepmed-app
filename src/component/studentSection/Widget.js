import React from 'react'
import OwnCollegeNotice from './OwnCollegeNotice';
import "./Widget.css";
import PublicNotice from "./PublicNotice";
import HealthNews from "./HealthNews";

function Widget() {
   
    return (
        <div className="widget">
            <OwnCollegeNotice />
            <PublicNotice />
            <HealthNews />
        </div>
    )
}

export default Widget
