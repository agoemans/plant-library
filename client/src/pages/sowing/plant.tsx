import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
        width: 660px;
        min-height: 75vh;
    `;

export default function Plant(props: any) {
    const {plantName, image} = props;

    const attribs = [
        {name: 'Basil', 'good': ['Borage, Marigold, Tomato'], 'bad': ['cucumber', 'Fennel', 'Sage']},
        {name: 'Dill', 'good': ['Cucumber, Lettuce, Basil'], 'bad': ['Cilantro, Tomato']}
    ];

    return (
        <Wrapper></Wrapper>
    );
}