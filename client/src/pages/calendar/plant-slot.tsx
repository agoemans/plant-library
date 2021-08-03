import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import { bounce, zoomIn } from 'react-animations';
import Months from './months';

const Wrapper = styled.section`
      display: flex;
      flex-direction: row;
       border: 1px solid darkgray;
    `;

const PlantDiv = styled.div`
        display: flex;
        border-right: 1px solid darkgray;
        padding: 10px;
        background: #f5f5f5;
        flex: 1;

    `;

const ImageDiv = styled(PlantDiv)`
      background-image: 80%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-origin: content-box;
      flex: 0 0 50px;
    `;

const BorderedText = styled.div`
      font-size: 1.5em;
      text-align: center;
      color: white;
      border-radius: 7px;
      width: 90%;
      font-weight: bold;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 60px;
      font-family: 'Mukta', sans-serif;
    `;

const LabelIcon = styled(ImageDiv)`
        border: 2px solid #3c6500;
        border-radius: 50%;
        max-width: 30px;
        max-height: 30px;
        padding: 2px;
    `;

const LabelText = styled.div`
        display: flex;
        width: 20px;
        height: 20px;
        flex: 1;
        font-family: 'Baloo Tammudu 2', cursive;
        color: #3A5A40;
        margin-left: 10px;
    `;

const MonthWrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding: 10px;
        background: #f5f5f5;
        border-right: 1px solid darkgray;
    `;

export default function PlantSlot(props: any) {
    const {name, icon, sun, water, germination, spacing} = props;

    return (
        <Wrapper className='plant-slot-container'>
            <PlantDiv style={{ flex: '0 0 100px'}}>
                <LabelIcon style={{ backgroundImage: `url(${icon})` }}/>
                <LabelText>{name}</LabelText>
            </PlantDiv>
            <ImageDiv style={{ backgroundImage: `url(${sun})` }}/>
            <PlantDiv style={{ flex: '0 0 100px'}}>
                <BorderedText style={{backgroundColor: '#872c01'}}>{spacing}</BorderedText>
            </PlantDiv>
            <ImageDiv style={{ backgroundImage: `url(${water})` }}/>
            <PlantDiv style={{ flex: '0 0 100px'}}>
                <BorderedText style={{backgroundColor: '#6db721'}}>{germination}</BorderedText>
            </PlantDiv>
            <MonthWrapper>
                <Months color='#3A5A40'/>
                <Months color='#ba2d0b'/>
            </MonthWrapper>
        </Wrapper>
    );
}