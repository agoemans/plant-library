import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import PlantSlot from "./plant-slot";
import GridMonths from "./grid-months";
import {Content} from "../shared/styles";

const Wrapper = styled.div`
  box-sizing: border-box;
      display: block;
      margin: 2em auto;
      width: 90%;
    `;

const FlexRow = styled.div`
      width: calc((100% * 0.5) / 5);
      text-align: center;
      padding: 0.5em 0.5em;
      border-right: solid 1px #d9d9d9;
      border-bottom: solid 1px #d9d9d9;
  font-family: 'Mukta', sans-serif;
  font-size: 0.9em;
`;

const RowGroup = styled.div`
  display: flex;
  border: 1px solid darkgray;
  transition: 0.5s;

  &:first-of-type {

    .flex-row {
      width: calc((100% * 0.5) / 5);
      padding: 0.5em 0.5em;
      background: #f0ead2;
      color: #2b9348;
      justify-content: center;
      font-family: 'Mukta', sans-serif;
      font-size: 0.9em;
      font-weight: bold;
    }
  }      
`;

const ImageCell = styled(FlexRow)`
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-origin: content-box;
      height: 50px;
    `;

const BorderedText = styled(FlexRow)`
      font-size: 1.5em;
      text-align: center;
      color: white;
      border-radius: 7px;
      width: 90%;
      font-weight: bold;
      padding: 5px;      
      justify-content: center;
      min-width: 60px;
      font-family: 'Mukta', sans-serif;
`;

const ContentText = styled.div `
    font-family: 'Baloo Tammudu 2', cursive;
    font-size: 20px;
    padding: 2% 0;
`;

export default function GridCalendar(props: any) {
    const {name, icon, sun, water, germination, spacing} = props;
    const plantItems = [
        {name: 'Basil', iImage: '../src/assets/spinach.png', sImage: '../src/assets/sun.png', wImage: '../src/assets/watering-can.png', spacing: '25', germination: '5-7'},
        {name: 'Dill', iImage: '../src/assets/spinach.png', sImage: '../src/assets/sun.png', wImage:'../src/assets/watering-can.png', spacing: '45', germination: '10-14'}
    ];

    return (
        <Wrapper className="table-container" role="table">
            <RowGroup role="rowgroup">
                <FlexRow className="flex-row first" role="columnheader" >NAME</FlexRow>
                <FlexRow className="flex-row" role="columnheader">SUN</FlexRow>
                <FlexRow className="flex-row" role="columnheader">SPACING</FlexRow>
                <FlexRow className="flex-row" role="columnheader">WATER</FlexRow>
                <FlexRow className="flex-row" role="columnheader">GERMINATION</FlexRow>
                <FlexRow className="flex-row" role="columnheader" style={{ width: `calc(100% * 0.5)`}}>CALENDAR</FlexRow>
            </RowGroup>
            {plantItems.map(( a: any, idx: number) =>
                <RowGroup key={idx} role="rowgroup">
                    <FlexRow className="flex-row" style={{ borderLeft: '1px solid #d9d9d9'}}>
                        <ContentText>{a.name}</ContentText>
                    </FlexRow>
                    <ImageCell className="flex-row" style={{ backgroundImage: `url(${a.sImage})` }}/>
                    <FlexRow className="flex-row" >
                        <BorderedText style={{backgroundColor: '#872c01'}}>{a.spacing}</BorderedText>
                    </FlexRow>
                    <ImageCell className="flex-row" style={{ backgroundImage: `url(${a.wImage})` }}/>
                    <FlexRow className="flex-row" >
                        <BorderedText style={{backgroundColor: '#6db721'}}>{a.germination}</BorderedText>
                    </FlexRow>
                    <FlexRow className="flex-row" style={{ width: 'calc(100% * 0.5)', padding: '1em 0.5em'}}>
                        <GridMonths blockColor='#3A5A40'/>
                        <GridMonths blockColor='#ba2d0b'/>
                    </FlexRow>
                </RowGroup>
            )}
        </Wrapper>
    );
}