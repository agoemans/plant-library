import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import {
    useHistory,
} from 'react-router-dom';

const Wrapper = styled.div`
      display: flex;
      flex-direction: row;
      width: 710px;
      margin: 0 10px;
      padding: 10px;
    `;

const Header = styled.div`
        display:flex;
        font-family: 'Niconne', sans-serif;
        color: #2b9348;
        justify-content: flex-start;
        font-size: 48px;
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

const Image = styled.div`
    display: flex;
    height: 48px;
    width: 48px;
    background-size: cover;
    background-image: url('../../src/assets/header-icon.png');
    background-repeat: no-repeat;
    margin-right: 15px;
    `;

export default function PageHeader() {
    const history = useHistory();
    const goHome = () => history.push('/');

    return (
        <Wrapper onClick={goHome}>
            <Image/>
            <Header>Planting Guide</Header>
            {/*<Byline>*/}
            {/*    Some notes about indoor and outdoor plants ...*/}
            {/*</Byline>*/}
        </Wrapper>
    );
}