import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import {
    useHistory,
} from 'react-router-dom';

export default function MainNav() {
    const [showCalendar, setShowCalendar] = React.useState(false);
    const [showSowGuide, setSowGuide] = React.useState(false);
    const [showInsects, setInsects] = React.useState(false);

    const history = useHistory();

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
        width: 660px;
        margin: 0 100px;
    `;

    const NavItem = styled.div`
        display: flex;
        margin: 5px;
        cursor: pointer;

        &:hover {
            transform: scale(1.04);
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
        font-family: 'Itim', serif;
    `;

    const NavItemImg = styled.div`
        display: flex;
        height: 200px;
        width: 200px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    `;

    const NavItemFooter = styled.div`
        width: 200px;
        font-family: 'EB Garamond', serif;
        color: #607744;
        justify-content: flex-end;
        font-size: 16px;
        min-width: 370px;
        background-color: #f3f3f3;
        padding: .5em calc(1.5em + .5vw);
        border-radius: 11px;
        margin-top: 2em;
    `;

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
        history.push('/sowing');
        console.log('clicked owing');
    };

    const onClickInsects = () => {
        setShowCalendar(false);
        setSowGuide(false);
        setInsects(true);
    };

    const menuItems = [
        { text: 'Planting calendar', cb: () => {onClickCal();}, image: '../src/assets/calendar-guide.png'},
        { text: 'Sowing Guide', cb: () => {onClickSow();}, image: '../src/assets/hat.png'},
        { text: 'Luring insects', cb: () => {onClickInsects();}, image: '../src/assets/insects.png'},
    ];
    return (
        <Wrapper>
            {menuItems.map(( a: any, idx: number) =>
                <NavItem key={idx} onClick={a.cb}>
                    <NavItemText>{a.text}</NavItemText>
                    <NavItemImg style={{ backgroundImage: `url(${a.image})` }}/>
                </NavItem>
            )}
            <NavItemFooter>Icons made by <a href='https://www.flaticon.com/authors/iconixar' title='iconixar'>iconixar</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a>
            </NavItemFooter>
        </Wrapper>
    );
}