import React, { useState, useEffect } from 'react';

import { v4 as uuid } from 'uuid';

import styled from 'styled-components';
import {Content} from './shared/styles'
import {
    useHistory,
} from 'react-router-dom';
import PageFooter from "../pages/shared/page-footer";
import {iMenuItems} from "../types";
import {mainPageAttribution} from "./attribution/attribution-data";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0 100px;
    min-height: 75vh;
`;

const PageContent = styled(Content)`
    flex: 1;
    margin: 0 auto;
    width: 80%;
`;

const NavItem = styled.div`
    display: flex;
    margin: 5px;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.04);
        color:#d4d700;
    }
    
    &:nth-child(2){
        flex-direction: row-reverse;
    }
`;

const NavItemText = styled.div`
    display: flex;
    padding: 10px;
    margin: 10px;
    align-items : center;
    font-family: 'Itim';
    font-size: 18px;
`;

const NavItemImg = styled.div`
    display: flex;
    height: 170px;
    width: 170px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    `;

export default function MainPageContent() {
    const {author, authorUrl, siteName, siteUrl} = mainPageAttribution;
    const history = useHistory();

    const onClickCal = () => {
       history.push('/calendar');
    };

    const onClickSow = () => {
        history.push('/companions');
    };

    const onClickInsects = () => {
        history.push('/rotation');
    };

    const menuItems: iMenuItems[] = [
        { title: 'Planting calendar', cb: () => {onClickCal();}, imageName: 'calendar', id: 'calendar' },
        { title: 'Companion Plants', cb: () => {onClickSow();}, imageName: 'companion', id: 'companion' },
        { title: 'Crop Rotation', cb: () => {onClickInsects();}, imageName: 'rotation', id: 'rotation' },
    ];
    return (
        <Wrapper>
            <PageContent>
                {menuItems.map(( a: iMenuItems) =>
                    <NavItem key={a.id} onClick={a.cb}>
                        <NavItemText>{a.title}</NavItemText>
                        <NavItemImg style={{ backgroundImage: `url(./assets/${a.imageName}.png)` }}/>
                    </NavItem>
                )}
            </PageContent>
            <PageFooter author={author} authorUrl={authorUrl} siteUrl={siteUrl} siteName={siteName}/>
        </Wrapper>
    );
}