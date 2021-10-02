import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import PlantSlot from './plant-slot';
import LabelSlot from './label-slot';
import PageFooter from "../shared/page-footer";

import {Content, TitleText} from '../shared/styles'
import GridCalendar from "./grid-calendar";

const Wrapper = styled.div`    
    display: flex;  
    flex-direction: column;
    `;

const CalendarContent = styled(Content)`
  max-width: 910px;
  margin: 2em auto;
  //width: 90%;
    padding: 10px;
    //margin: 0 10px;
`;

export default function PlantCalendar() {
    const plantItems = [
        {name: 'Basil', iImage: '../src/assets/spinach.png', sImage: '../src/assets/sun.png', wImage: '../src/assets/watering-can.png', spacing: '25', germination: '5-7'},
        {name: 'Dill', iImage: '../src/assets/spinach.png', sImage: '../src/assets/sun.png', wImage:'../src/assets/watering-can.png', spacing: '45', germination: '10-14'}
    ];

    return (
        <Wrapper>
            <TitleText>CALENDAR</TitleText>
            <GridCalendar/>

            <PageFooter aName='turkkub' aUrl='https://www.flaticon.com/authors/turkkub' sUrl='https://www.flaticon.com/' sName='Flaticon'/>
        </Wrapper>
    );
}