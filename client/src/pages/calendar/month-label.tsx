import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

export default function CalendarLabel(props: any) {
    const {name} = props;

    const Wrapper = styled.div`
      display: flex;
      background: lightgrey;
      flex: 1;
    `;

    return <Wrapper>
        HI
    </Wrapper>;
}