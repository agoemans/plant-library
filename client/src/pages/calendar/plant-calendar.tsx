import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageFooter from "../shared/page-footer";

import {TitleText} from '../shared/styles'
import GridCalendar from "./grid-calendar";
import {calendarAttribution} from "../attribution/attribution-data";

const Wrapper = styled.div`    
    display: flex;  
    flex-direction: column;
    `;

export default function PlantCalendar() {
    const {author, authorUrl, siteName, siteUrl} = calendarAttribution;

    return (
        <Wrapper>
            <TitleText>CALENDAR</TitleText>
            <GridCalendar/>

            <PageFooter author={author} authorUrl={authorUrl} siteUrl={siteUrl} siteName={siteName}/>
        </Wrapper>
    );
}