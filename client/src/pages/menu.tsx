import React, { useState, useEffect } from 'react';

export default function Menu() {
    let menuItems = [
        { text: 'Planting calendar'}, { text: 'Sowing Guide'}, { text: 'Luring insects'}
    ];
    return (
        <div className="menu-container">
            {menuItems.map(( a: any, idx: number) =>
                <div key={idx} className="menu-item">
                    {a.text}
                </div>
            )}
        </div>
    );
}