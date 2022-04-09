import { v4 as uuid } from 'uuid';

export const NavigationItems = [
    {
        title: 'Home',
        text: 'Home',
        image: './assets/calendar.png',
        id: uuid()
    },
    {
        title: 'Calendar',
        text: 'Planting calendar',
        image: './assets/calendar.png',
        id: uuid()
    },
    {
        title: 'Companions',
        text: 'Companion Plants',
        image: './assets/compantion.png',
        id: uuid()
    },
    {
        title: 'Rotation',
        text: 'Crop Rotation',
        image: './assets/rotation.png',
        id: uuid()
    },
];

