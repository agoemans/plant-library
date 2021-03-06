import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {iSinglePlot} from "../../types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;        
`;

const OuterImagesBox = styled.div`
    display: flex;
    flex-direction: row;      
    flex-wrap:wrap;
    padding: 5px;
    max-width: 120px;
    align-items: center;
`;

const ImageBox = styled.div`
    display: flex;
    padding: 2px;
    margin: 2px;
    height: 30px;
    width: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;


const CaptionBox = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Itim';
`;

export default function SinglePlot(props: iSinglePlot) {
    const {caption, imageName} = props;
    return (
        <Wrapper>
            <OuterImagesBox>
                {[...Array(9)].map((idx: number) =>
                    <ImageBox key={idx} style={{ backgroundImage: `url('./assets/${imageName}.png')` }}/>
                )}
            </OuterImagesBox>
            <CaptionBox>{caption}</CaptionBox>
        </Wrapper>
    )
}