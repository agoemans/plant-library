import React, { useState, useEffect } from 'react';
import PlantAttribute from '../plant-attribute';
import PlantAttributes from '../plant-attributes';
import {
    useHistory,
} from 'react-router-dom';

import styled, { keyframes } from 'styled-components';
import { bounce, zoomIn } from 'react-animations';
import {Content} from "../shared/styles";

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

const SowingContent = styled.div`
      flex-direction: row;
      display: flex;
      margin: 5px;
      flex-wrap: wrap;
      width: 500px;
      justify-content: center;
`;

export default function SowingGuide() {
    const [moveLeft, setSlideLeft] = React.useState(false);
    const [moveRight, setSlideRight] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const history = useHistory();

    const menuItems = [
        { text: 'Basil', cb: () => {history.push('/plant');}},
        { text: 'Dill', cb: () => {}},
        { text: 'Thyme', cb: () => {}},
        { text: 'Thyme', cb: () => {}},
        { text: 'Thyme', cb: () => {}},
        { text: 'Thyme', cb: () => {}},
    ];

    const zoomInAnimation = keyframes`${zoomIn}`;
    const ZoomInDiv = styled.div`
      animation: 350ms ${zoomInAnimation};
      animation-fill-mode: both;
    `;


    return (
        <Wrapper>
            <SowingContent>
                {menuItems.map(( a: any, idx: number) =>
                    <ZoomInDiv key={idx} className='zoomin-container' style={{animationDelay: `${idx * 0.25}s`}}>
                        <div key={idx} className='plant' onClick={a.cb}>
                            {a.text}
                        </div>
                    </ZoomInDiv>
                )}
            </SowingContent>
        </Wrapper>
    );
}