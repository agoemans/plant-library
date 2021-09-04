import React, { useState, useEffect } from 'react';
import styled from "styled-components";

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

export default function SinglePlot(props: any) {
    const {caption, images} = props;
    return (
        <Wrapper>
            <OuterImagesBox>
                {images.map(( a: any, idx: number) =>
                    <ImageBox key={idx} style={{ backgroundImage: `url(${a.src})` }}/>
                )}
            </OuterImagesBox>
            <CaptionBox>{caption}</CaptionBox>
        </Wrapper>
    )
}