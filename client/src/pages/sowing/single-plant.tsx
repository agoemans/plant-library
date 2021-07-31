import React, { useState, useEffect } from 'react';
import PlantAttribute from "../plant-attribute";
import PlantAttributes from "../plant-attributes";

import styled, { keyframes } from 'styled-components';
import { bounce, zoomIn } from 'react-animations';
import {useHistory} from "react-router-dom";

export default function SinglePlant(props: any) {
    const [moveLeft, setSlideLeft] = React.useState(false);
    const [moveRight, setSlideRight] = React.useState(false);
    const {name, attrib} = props;

    const history = useHistory();

    const zoomInAnimation = keyframes`${zoomIn}`;
    const ZoomInDiv = styled.div`
      animation: 180ms ${zoomInAnimation};
      animation-fill-mode: both;    
    `;

    const Wrapper = styled.section`      
      background: #f7f7f7;
      border-radius: 5%;
      min-height: 500px;
    `;

    const Title = styled.h1`
      font-family: 'Bree Serif', serif;
      font-size: 2em;
      font-weight: 400;
      text-align: center;
      color: darksalmon;
      padding: 0.6em;
    `;

    const BackButton = styled.button`      
      background: tomato;
      color: white;    
      font-size: 1em;
      margin: 2em;
      padding: 0.25em 1em;
      border: 2px solid tomato;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
         transform: scale(1.04);        
         font-weight: bold;
      }
    `;

    const Paragraph = styled.p`
      color: orange;    
      font-size: 2em;
      margin: 0 2em;
      padding: 0.25em 1em;
      font-family: 'Caveat', cursive;
    `;

    const back = () => {
        history.push('/sowing');
    }

    const list = [
        'Needs a lot of sun',
        'Aphids are their enemy',
        'Water regularly',
        'Space 12 to 18 inches apart'
    ]

    return (
        <ZoomInDiv>
            <Wrapper>
                <Title>BASIL</Title>
                    {list.map(( a: any, idx: number) =>
                        <Paragraph>- {a}</Paragraph>
                    )}
                <BackButton onClick={back}>BACK</BackButton>
            </Wrapper>
            <div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </ZoomInDiv>
    );
}