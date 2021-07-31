import React, { useState, useEffect } from 'react';

import PlantAttribute from './plant-attribute'
import {
    useHistory,
} from "react-router-dom";

export default function PlantAttributes() {
    const history = useHistory();
    const attribs = [
        {name: 'water', image: '../src/assets/humidity.png'},
        {name: 'sun', image: '../src/assets/sun.png'},
        {name: 'sun', image: '../src/assets/sun.png'},
        {name: 'sun', image: '../src/assets/sun.png'},
        {name: 'sun', image: '../src/assets/sun.png'}
        ];

    const back = () => {
        history.push('/sowing');
    }

    return (
        <div className="plant-attribs-main">
            <div className="plant-content-close" onClick={back}>X</div>
            <div className="plant-attribs-content">
                {attribs.map(( a: any, idx: number) =>
                    <div className="plant-attrib-content-main" key={idx} style={{ backgroundImage: `url(${a.image})` }}/>
                )}
            </div>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    );
}