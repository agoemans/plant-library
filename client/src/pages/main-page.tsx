import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import {
    useHistory,
} from 'react-router-dom';

export default function MainPage() {
    const history = useHistory();
    const goHome = () => history.push('/');

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        width: 710px;
        margin: 0 105px;
    `;

    const Header = styled.h1`
        display:flex;
        font-family: 'Niconne', sans-serif;
        color: #2b9348;
        justify-content: flex-start;
        font-size: 84px;
        font-weight: 100;
        margin: 0;
    `;

    const Byline = styled.div`
        display:flex;
        font-family: 'Itim';
        color: #2b9348;
        justify-content: flex-end;
        font-size: 22px;
        padding: 0.4em 0.4em 0 0.4em;
    `;

    const Divider = styled.div`
        margin: 2em 0;
        border-bottom: 3px solid #dde6d6;
    `;

    return (
        <Wrapper onClick={goHome}>
            <Header>Planting Guide</Header>
            <Byline>
                Some notes about indoor and outdoor plants ...
            </Byline>
            <Divider/>
        </Wrapper>
    );
}