import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

export default function Months(props: any) {
    const {color} = props;

    const Wrapper = styled.div`
      display: flex;
      flex-direction: row;
      background: #f5f5f5;
      flex: 1;
    `;

    const MonthDiv = styled.div`
        display: flex;
        background-color: lightgrey;
        min-width: 30px;
        max-height: 15px;
        border: 1px solid lightgrey;
    `;

    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return <Wrapper>
        {months.map((a: any, idx: number) =>
            <MonthDiv key={idx} style={{ backgroundColor: `${color}` }} >
                <div key={idx}/>
            </MonthDiv>
        )}
    </Wrapper>;
}