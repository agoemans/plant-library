import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import GridMonths from "./grid-months";
import {getCalendarItems} from "../../api/routes";
import {CalendarModel} from "../../../../server/src/models";

const Wrapper = styled.div`
    box-sizing: border-box;
    display: block;
    margin: 2em auto;
    width: 90%;
`;

const RowGroup = styled.div`
    display: flex;
    border: 1px solid darkgray;
    transition: 0.5s;
`;

const Row = styled.div`
    width: calc((100% * 0.5) / 5);
    text-align: center;
    padding: 0.5em 0.5em;
    border-right: solid 1px #d9d9d9;
    border-bottom: solid 1px #d9d9d9;
    font-family: 'Mukta', sans-serif;
    font-size: 0.9em;
`;

const HeaderRow = styled(Row) `
    width: calc((100% * 0.5) / 5);
    padding: 0.5em 0.5em;
    background: #f0ead2;
    color: #2b9348;
    justify-content: center;
    font-family: 'Mukta', sans-serif;
    font-size: 0.9em;
    font-weight: bold;
  
    &:last-child {
     width: calc(100% * 0.5);
    }
`;

const ContentRow = styled(Row) `
      &:first-child {
        border-left: 1px solid #d9d9d9;
      }
      &:last-child {
         width: calc(100% * 0.5);
        padding: 1em 0.5em;
      }
`;

const ImageCell = styled(Row)`
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-origin: content-box;
      height: 50px;
`;

const SunImageCell = styled(ImageCell)`
      background-image: url('../src/assets/sun.png');
`;

const WaterImageCell = styled(ImageCell)`
      background-image: url('../src/assets/watering-can.png');
`;

const BorderedText = styled(Row)`
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

const MaroonBorder = styled(BorderedText)`
      background-color: #872c01;
`;

const GreenBorder = styled(BorderedText)`
      background-color: #6db721;
`;

const ContentText = styled.div `
    font-family: 'Baloo Tammudu 2', cursive;
    font-size: 20px;
    padding: 2% 0;
`;

export default function GridCalendar() {
    const [calendarItems, setCalendarItems] = useState([]);

    useEffect(() => {
        const cItems: () => Promise<void> = async () => {
            const results = await getCalendarItems();
            setCalendarItems(JSON.parse(results));
        };

        cItems().catch(e => console.log(e));
    }, [setCalendarItems]);

    return (
        <Wrapper>
            <RowGroup>
                <HeaderRow>NAME</HeaderRow>
                <HeaderRow>SUN</HeaderRow>
                <HeaderRow>SPACING</HeaderRow>
                <HeaderRow>WATER</HeaderRow>
                <HeaderRow>GERMINATION</HeaderRow>
                <HeaderRow>CALENDAR</HeaderRow>
            </RowGroup>
            {calendarItems.map(( a: CalendarModel, idx: number) =>
                <RowGroup key={idx}>
                    <ContentRow>
                        <ContentText>{a.plantName}</ContentText>
                    </ContentRow>
                    <SunImageCell/>
                    <ContentRow>
                        <MaroonBorder>{a.spacing}</MaroonBorder>
                    </ContentRow>
                    <WaterImageCell/>
                    <ContentRow>
                        <GreenBorder>{a.germination}</GreenBorder>
                    </ContentRow>
                    <ContentRow>
                        <GridMonths blockColor='#3A5A40' bgColor='#8eb487' months={a.calendar.sow}/>
                        <GridMonths blockColor='#ba2d0b' bgColor='b48794' months={a.calendar.harvest}/>
                    </ContentRow>
                </RowGroup>
            )}
        </Wrapper>
    );
}