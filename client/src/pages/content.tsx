import React, { useState, useEffect } from 'react';
import SowingGuide from './sowing/sowing-guide';
import MainNav from "./main-nav";
import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";

export default function Content() {
    const [showCalendar, setShowCalendar] = React.useState(false);
    const [showSowGuide, setSowGuide] = React.useState(false);
    const [showInsects, setInsects] = React.useState(false);
    const onClickCal = () => {
        setShowCalendar(true);
        setSowGuide(false);
        setInsects(false);
    };

    const onClickSow = () => {
        setShowCalendar(false);
        setSowGuide(true);
        setInsects(false);
    };

    const onClickInsects = () => {
        setShowCalendar(false);
        setSowGuide(false);
        setInsects(true);
    };

    let menuItems = [
        { text: 'Planting calendar', cb: () => {onClickCal()}},
        { text: 'Sowing Guide', cb: () => {onClickSow()}},
        { text: 'Luring insects', cb: () => {onClickInsects()}},
    ];
    return (
        <div className="content-container">
            <MainNav/>
           {/* <div className="menu-item-container">
                {menuItems.map(( a: any, idx: number) =>
                    <div key={idx} className="menu-item" onClick={a.cb}>
                        {a.text}
                    </div>
                )}
            </div>
            <div className="content-items">
                {showCalendar ? 'Cal' : null}
                {showSowGuide ? <SowingGuide/> : null}
                {showInsects ? 'Insects' : null}
            </div>*/}

        </div>
    );
}