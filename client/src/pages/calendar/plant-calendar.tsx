import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PageFooter from "../shared/page-footer";

import {TitleText} from '../shared/styles'
import GridCalendar from "./grid-calendar";

const Wrapper = styled.div`    
    display: flex;  
    flex-direction: column;
    `;

export default function PlantCalendar() {
    return (
        <Wrapper>
            <TitleText>CALENDAR</TitleText>
            <GridCalendar/>

            <PageFooter author='turkkub' authorUrl='https://www.flaticon.com/authors/turkkub' siteUrl='https://www.flaticon.com/' siteName='Flaticon'/>
        </Wrapper>
    );
}