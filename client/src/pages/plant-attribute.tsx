import React, { useState, useEffect } from 'react';

import {iPlantAttributes} from '../types'

export default function PlantAttribute(props: iPlantAttributes) {
    const {plantName, image} = props;

    return (
        <div className="plant-attrib-content-main" style={{ backgroundImage: `url(${image})` }}>
            <div className="plant-attrib-content-inner" >{plantName}</div>
        </div>
    );
}