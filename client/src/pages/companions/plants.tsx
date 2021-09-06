import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import PageFooter from "../shared/page-footer";
import {TitleText} from '../shared/styles';

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        //padding: 10px;
        //margin: 10px;
        //width: 660px;
        //min-height: 75vh;
    `;

const OuterBox = styled.div`
        display: flex;
        flex-direction: row;        
    `;

const PlantBox = styled.div`
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
        background-color: #f3f3f3;
        width: 300px;
    `;

const TitleBox = styled.div`
        display: flex;
        flex-direction: column;        
        margin: 0 10px 10px 10px;   
    `;

// const TitleText = styled.div`
//         display: flex;
//         margin: 10px;
//         font-family: 'Laila', sans-serif;
//         font-size: 34px;
//         justify-content: center;
//     `;

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
        //padding: 15px;        
        font-family: 'Fjalla One', sans-serif;
        color: white;
        text-transform: uppercase;
        min-width: 100px;
        flex: 1 1 50%;
    `;

const List = styled.li`
        display: flex;
        flex-direction: column;
        //margin: 10px 0;
        align-items: center;
        font-size: 18px;
        padding:15px;
        border-bottom: 1px solid #f9f9f9;
    `;

export default function Plants(props: any) {
    const {plantName, image} = props;

    const attribs = [
        {name: 'Basil', good: ['Borage', 'Marigold', 'Tomato'], bad: ['Cucumber', 'Fennel', 'Sage'], image: '../src/assets/spinach.png'},
        {name: 'Dill', good: ['Cucumber', 'Lettuce', 'Basil'], bad: ['Cilantro', 'Tomato'], image: '../src/assets/spinach.png'},
        {name: 'Parsley', good: ['Brassicas', 'Tomatoes', 'Peppers'], bad: ['Garlic', 'Onion', 'Lettuce'], image: '../src/assets/spinach.png'}
    ];

    return (
        <Wrapper>
            <TitleText>COMPANIONS</TitleText>
            <OuterBox>
            {attribs.map(( a: any, idx: number) =>
                <PlantBox key={idx}>
                    <TitleBox>
                        <TitleText>
                            {a.name}
                        </TitleText>
                        <TitleImage style={{ backgroundImage: `url(${a.image})` }}/>
                    </TitleBox>
                    <AttributesBox>
                        <Content style={{ backgroundColor: '#6a994e', marginRight: '1px'}}>
                            {a.good.map((g: any, idx: number) =>
                                <List key={idx}>{g}</List>
                            )}
                        </Content>
                        <Content style={{ backgroundColor: '#bc4749'}}>
                            {a.bad.map((g: any, idx: number) =>
                                <List key={idx}>{g}</List>
                            )}
                        </Content>
                    </AttributesBox>
                </PlantBox>
            )}
            </OuterBox>
            <PageFooter aName='iconixar' aUrl='https://www.flaticon.com/authors/iconixar' sUrl='https://www.flaticon.com/' sName='Flaticon'/>
        </Wrapper>
    );
}