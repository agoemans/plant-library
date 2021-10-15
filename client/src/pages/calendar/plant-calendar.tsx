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

            <PageFooter aName='turkkub' aUrl='https://www.flaticon.com/authors/turkkub' sUrl='https://www.flaticon.com/' sName='Flaticon'/>
        </Wrapper>
    );
}