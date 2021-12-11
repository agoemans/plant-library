import React from 'react';
import styled from "styled-components";
import {
    useHistory,
} from 'react-router-dom';

import {NavigationItems} from './shared/navigation-items'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;      
    background-color: #28965a;
`;

const List = styled.li`
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 10px;
    font-family: 'Mukta', sans-serif;
    color: #d5f2e3;
    cursor: pointer;
    
    &:first-child {
      margin-left: 10px;
    }
    
    &.active {
      font-weight: bold;
      color: #ccff33;
    }
    &:hover {
      color: #ccff33;
    }
`;


export default function NavigationBar() {
    const history = useHistory();

    const onClickItem = (title: string) => {
        switch(title){
            case 'Home':
                history.push('/');
                break;
            case 'Calendar':
                history.push('/calendar');
                break;
            case 'Companions':
                history.push('/companions');
                break;
            case 'Rotation':
                history.push('/rotation');
                break;
        }
    }

    const navItems = NavigationItems;

    return (
        <Wrapper>
            {navItems.map((item: any, idx: number) =>
                <List key={idx} onClick={()=>{onClickItem(item.title)}}>
                    {item.title}
                </List>
            )}
        </Wrapper>
    );
}