import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {
    useHistory,
} from 'react-router-dom';

import PlantSlot from './plant-slot';
import LabelSlot from './label-slot';


export default function PlantCalendar() {
    const Wrapper = styled.div`
        width: 910px
    `;

    const NavItemFooter = styled.div`
        width: 200px;
        font-family: 'EB Garamond', serif;
        color: #607744;
        justify-content: flex-end;
        font-size: 16px;
        min-width: 370px;
        background-color: #f3f3f3;
        padding: .5em calc(1.5em + .5vw);
        border-radius: 11px;
        margin-top: 2em;
    `;

    const plantItems = [
        {name: 'Basil', iImage: '../src/assets/spinach.png', sImage: '../src/assets/sun.png', wImage: '../src/assets/watering-can.png', spacing: '25', germination: '5-7'},
        {name: 'Dill', iImage: '../src/assets/spinach.png', sImage: '../src/assets/sun.png', wImage:'../src/assets/watering-can.png', spacing: '45', germination: '10-14'}
    ];

    return (
        <Wrapper>
            <LabelSlot/>
            {plantItems.map(( a: any, idx: number) =>
                <PlantSlot key={idx} icon={a.iImage} name={a.name} sun={a.sImage} water={a.wImage} germination={a.germination} spacing={a.spacing}/>
            )}
            <NavItemFooter>Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </NavItemFooter>
        </Wrapper>
    );
}