import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
      box-sizing: border-box;
      display: block;
    `;

const RowGroup = styled.div`
  display: flex;  
`;

const FlexRow = styled.div`
  width: calc(100% / 12);
  min-height:15px;
  justify-content: center;
  border: 1px solid lightgrey;
`;

export default function GridMonths(props: any) {
    const {blockColor} = props;
    const months = [
        {name: 'Jan'}, {name: 'Feb'}, {name: 'March'}, {name: 'April'},
        {name: 'May'}, {name: 'June'}, {name: 'July'}, {name: 'Aug'},
        {name: 'Sept'},{name: 'Oct'}, {name: 'Nov'}, {name: 'Dec'}
    ];

    return (
        <Wrapper className="table-container" role="table">
            <RowGroup role="rowgroup">
            {months.map( (a: any, idx: number) =>
                <FlexRow key={idx} className="flex-row" style={{backgroundColor: `${blockColor}`}}/>
            )}
            </RowGroup>
        </Wrapper>
    );
}