import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import {Content} from './shared/styles'
import {
    useHistory,
} from 'react-router-dom';
import PageFooter from "../pages/shared/page-footer";
import NavigationBar from "./navigation-bar";
import {iMenuItems} from "../types";

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding: 10px;
        //margin: 10px;
        //width: 660px;
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
    const [showCalendar, setShowCalendar] = React.useState(false);
    const [showSowGuide, setSowGuide] = React.useState(false);
    const [showInsects, setInsects] = React.useState(false);

    const history = useHistory();

    const onClickCal = () => {
        setShowCalendar(true);
        setSowGuide(false);
        setInsects(false);
        history.push('/calendar');
    };

    const onClickSow = () => {
        setShowCalendar(false);
        setSowGuide(true);
        setInsects(false);
        history.push('/companions');
        console.log('clicked owing');
    };

    const onClickInsects = () => {
        setShowCalendar(false);
        setSowGuide(false);
        setInsects(true);
        history.push('/rotation');
    };

    const menuItems: iMenuItems[] = [
        { title: 'Planting calendar', cb: () => {onClickCal();}, imageName: 'calendar'},
        { title: 'Companion Plants', cb: () => {onClickSow();}, imageName: 'companion'},
        { title: 'Crop Rotation', cb: () => {onClickInsects();}, imageName: 'rotation'},
    ];
    return (
        <Wrapper>
            <PageContent>
                {menuItems.map(( a: iMenuItems, idx: number) =>
                    <NavItem key={idx} onClick={a.cb}>
                        <NavItemText>{a.title}</NavItemText>
                        <NavItemImg style={{ backgroundImage: `url(../src/assets/${a.imageName}.png)` }}/>
                    </NavItem>
                )}
            </PageContent>
            <PageFooter aName='iconixar' aUrl='https://www.flaticon.com/authors/iconixar' sUrl='https://www.flaticon.com/' sName='Flaticon'/>
        </Wrapper>
    );
}