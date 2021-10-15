import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import YearlyPlots from "./yearly-plots";

import {getCropRotationList} from "../../api/routes";
import {RotationModel} from "../../../../server/src/models";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    //padding: 10px;
    //margin: 10px;
    //max-width: 150px;  
`;

const TitleText = styled.div`
    display: flex;
    margin: 10px;
    font-family: 'Laila', sans-serif;
    font-size: 34px;
    justify-content: center;
`;

const PlotsOuterBox = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
`;

export default function CropGrid() {
    const [cropRotationList, setCropRotationList] = useState([]);

    useEffect(() => {
        const rotationList: any = async () => {
            const results = await getCropRotationList();
            setCropRotationList(JSON.parse(results));
        };

        rotationList();
    }, [setCropRotationList]);

    return (
        <Wrapper>
            <TitleText>CROP ROTATION</TitleText>
            <PlotsOuterBox>
                {cropRotationList.map(( c: RotationModel, idx: number) =>
                    <YearlyPlots key={idx} title={c.yearName} plots={c.plots}/>
                )}
            </PlotsOuterBox>
        </Wrapper>
    )
}