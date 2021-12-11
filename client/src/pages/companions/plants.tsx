import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import PageFooter from "../shared/page-footer";
import {TitleText} from '../shared/styles';
import {getCompanions} from "../../api/routes";
import {CompanionsModel} from "../../../../server/src/models";
import {companionAttribution} from "../attribution/attribution-data";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const OuterBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5em;
`;

const PlantBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    background-color: #f3f3f3;
    width: calc(100%/3);
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;        
    margin: 0 10px 10px 10px;   
`;

const TitleImage = styled.div`
    display: flex;
    padding: 10px;
    margin: 10px;
    height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;  
`;

const AttributesBox = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Fjalla One', sans-serif;
    color: white;
    text-transform: uppercase;
    min-width: 100px;
    flex: 1 1 50%;
    border-radius: 3%;
`;

const FriendContent = styled(Content)`
    margin-right: 1px;
    background-color: #6a994e;
`;

const FoeContent = styled(Content)`  
    background-color: #bc4749;
`;

const List = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    padding:15px;
    border-bottom: 1px solid #f9f9f9;
`;

export default function Plants() {
    const [companionList, setCompanionList] = useState([]);
    const {author, authorUrl, siteName, siteUrl} = companionAttribution;

    useEffect(() => {
        const companions: () => Promise<void> = async () => {
            const results = await getCompanions();
            setCompanionList(JSON.parse(results));
        };

        companions().catch( e => console.log(e));
    }, [setCompanionList]);

    return (
        <Wrapper>
            <TitleText>COMPANIONS</TitleText>
            <OuterBox>
            {companionList.map(( a: CompanionsModel, idx: number) =>
                <PlantBox key={idx}>
                    <TitleBox>
                        <TitleText>
                            {a.plantName}
                        </TitleText>
                        <TitleImage style={{ backgroundImage: `url(../src/assets/${a.imageName}.png)` }}/>
                    </TitleBox>
                    <AttributesBox>
                        <FriendContent>
                            {a.friend.map((g: string, idx: number) =>
                                <List key={idx}>{g}</List>
                            )}
                        </FriendContent>
                        <FoeContent>
                            {a.foe.map((g: string, idx: number) =>
                                <List key={idx}>{g}</List>
                            )}
                        </FoeContent>
                    </AttributesBox>
                </PlantBox>
            )}
            </OuterBox>
            <PageFooter author={author} authorUrl={authorUrl} siteUrl={siteUrl} siteName={siteName}/>
        </Wrapper>
    );
}