import React, { useState, useEffect } from 'react';

import styled from "styled-components";
import YearlyPlots from "./yearly-plots";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    //max-width: 150px;  
`;

const TitleText = styled.div`
    display: flex;
    margin: 10px;
    font-family: 'Laila', sans-serif;
    font-size: 34px;
    justify-content: center;
`;

const PlotsOuterBox = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
`;

export default function CropGrid() {
    const grid = [
        {title: 'Year 1',
            plots: [
                { caption: 'Legume',
                  images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}
                  ]
                },
                {caption: 'Root',
                 images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                },
                {caption: 'Leaf', images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                },
                {caption: 'Fruit', images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                }

        ]},
        {title: 'Year 2',
            plots: [
                {caption: 'Fruit', images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                },
                { caption: 'Legume',
                    images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}
                    ]
                },
                {caption: 'Root',
                    images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                },
                {caption: 'Leaf', images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                }
            ]},
        {title: 'Year 3',
            plots: [
                {caption: 'Leaf', images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                },
                {caption: 'Fruit', images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                },
                { caption: 'Legume',
                    images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}
                    ]
                },
                {caption: 'Root',
                    images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                }
            ]},
        {title: 'Year 4',
            plots: [
                {caption: 'Root',
                    images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                },
                {caption: 'Leaf', images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                },
                {caption: 'Fruit', images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}]
                },
                { caption: 'Legume',
                    images: [
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'},
                        {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}, {src: '../src/assets/spinach.png'}
                    ]
                }
            ]}
    ];

    return (
        <Wrapper>
            <TitleText>CROP ROTATION</TitleText>
            <PlotsOuterBox>
                {grid.map(( c: any, idx: number) =>
                    <YearlyPlots key={idx} title={c.title} plots={c.plots}/>
                )}
            </PlotsOuterBox>
        </Wrapper>
    )
}