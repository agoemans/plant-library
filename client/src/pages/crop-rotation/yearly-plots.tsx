import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import SinglePlot from "./single-plot";

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      padding: 10px;
      margin: 10px;
      max-width: fit-content;
      border: 1px solid #ffe5d9;
`;

const TitleText = styled.div`
        display: flex;
        margin: 10px;
        font-family: 'Laila', sans-serif;
        font-size: 22px;
        justify-content: center;
        background-color: #ece4db;
`;

const OuterPlotBox = styled.div`
      display: flex;
      flex-direction: row;  
      //max-width: 150px;  
      max-width: 260px;
      flex-wrap: wrap;
`;


export default function YearlyPlots(props: any) {
    const {title, plots} = props;

   /* const crops = [
        {title: 'Year 1', caption: 'Legume', images: [{src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]}
    ];*/

    return (
        <Wrapper>
            <TitleText>{title}</TitleText>
            <OuterPlotBox>
                {plots.map(( p: any, idx: number) =>
                    <SinglePlot key={idx} caption={p.caption} images={p.images}/>
                )}
            </OuterPlotBox>
            {/*<SinglePlot caption={caption} images={images}/>*/}
        </Wrapper>
    )
}