import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Footer = styled.footer`
        width: 100%;       
        justify-content: center;        
        margin-top: 0.3em;
        display: flex;
    `;

const Para = styled.p`
        background-color: #f3f3f3;
        padding: .5em calc(1.5em + .5vw);
        color: #607744;        
        font-size: 16px;   
        text-align: center;
        font-family: 'Itim',serif;
        border-radius: 11px;
        width: 250px;
    `;

const Link = styled.a`
        color: #ccaa22;
        text-decoration: none;
    `;

export default function PageFooter(props: any) {
    const {aName, aUrl, sName, sUrl} = props;

    return (
        <Footer>
            <Para>
                Icons by
                <Link href={aUrl} title={aName}> {aName} </Link>
                from
                <Link href={sUrl} title={sName}> {sName} </Link>
            </Para>
        </Footer>
    );
}