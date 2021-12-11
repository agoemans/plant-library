import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import YearlyPlots from "./yearly-plots";

import {getCropRotationList} from "../../api/routes";
import {RotationModel} from "../../../../server/src/models";
import PageFooter from "../shared/page-footer";
import {rotationAttribution} from "../attribution/attribution-data";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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
    const {author, authorUrl, siteName, siteUrl} = rotationAttribution;

    useEffect(() => {
        const rotationList: () => Promise<void> = async () => {
            const results = await getCropRotationList();
            setCropRotationList(JSON.parse(results));
        };

        rotationList().catch(e => console.log(e));
    }, [setCropRotationList]);

    return (
        <Wrapper>
            <TitleText>CROP ROTATION</TitleText>
            <PlotsOuterBox>
                {cropRotationList.map(( c: RotationModel, idx: number) =>
                    <YearlyPlots key={idx} title={c.yearName} plots={c.plots}/>
                )}
            </PlotsOuterBox>
            <PageFooter author={author} authorUrl={authorUrl} siteUrl={siteUrl} siteName={siteName}/>
        </Wrapper>
    )
}