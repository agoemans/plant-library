import React from 'react';

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

const Image = styled.div`
  display: flex;
  height: 48px;
  width: 48px;
  background-size: cover;
  background-image: url('./assets/header-icon.png');
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
        </Wrapper>
    );
}