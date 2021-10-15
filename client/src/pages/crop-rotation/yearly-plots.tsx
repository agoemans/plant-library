import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import SinglePlot from "./single-plot";
import {PlotModel} from "../../../../server/src/models";

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

    return (
        <Wrapper>
            <TitleText>{title}</TitleText>
            <OuterPlotBox>
                {plots.map(( p: PlotModel, idx: number) =>
                    <SinglePlot key={idx} caption={p.plantName} imageName={p.imageName}/>
                )}
            </OuterPlotBox>
        </Wrapper>
    )
}