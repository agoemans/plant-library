import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import { bounce, zoomIn } from 'react-animations';
import Months from './months';

const Wrapper = styled.section`
      display: flex;
      flex-direction: row;
       border: 1px solid darkgray;
    `;

const LabelDiv = styled.div`
        display: flex;
        border-right: 1px solid darkgray;
        padding: 10px;
        background: #f0ead2;
        color: #2b9348;
        justify-content: center;
        font-family: 'Mukta', sans-serif;
        font-weight: bold;

    `;

export default function LabelSlot() {

    const textLabels = [
        {name: 'name', width: 94},
        {name: 'sun', width: 53},
        {name: 'spacing', width: 70},
        {name: 'water', width: 10},
        {name: 'germination', width: 10}
    ];

    return (
        <Wrapper className='plant-slot-container'>
            <LabelDiv style={{flex:'0 0 100px'}}>NAME</LabelDiv>
            <LabelDiv style={{flex:'0 0 50px'}}>SUN</LabelDiv>
            <LabelDiv style={{flex:'0 0 100px'}}>SPACING</LabelDiv>
            <LabelDiv style={{flex:'0 0 50px'}}>WATER</LabelDiv>
            <LabelDiv style={{flex:'0 0 100px'}}>GERMINATION</LabelDiv>
            <LabelDiv style={{flex:'0 0 384px'}}>CALENDAR</LabelDiv>
        </Wrapper>
    );
}