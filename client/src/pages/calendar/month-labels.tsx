import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import CalendarLabel from "./month-label";

export default function CalendarLabels(props: any) {
    const {color} = props;

    const Wrapper = styled.div`
      display: flex;
      flex-direction: row;
      background: lightgrey;
      flex: 1;
    `;

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    return <Wrapper>
        {monthNames.map((a: any, idx: number) =>
            <CalendarLabel key={idx} />
        )}
    </Wrapper>;
}