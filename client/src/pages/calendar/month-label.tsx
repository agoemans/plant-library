import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
      display: flex;
      background: lightgrey;
      flex: 1;
    `;

export default function CalendarLabel(props: any) {
    const {name} = props;
    return <Wrapper>
        MONTH
    </Wrapper>;
}