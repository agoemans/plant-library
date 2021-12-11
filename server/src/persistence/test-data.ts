import {CalendarModel, CompanionsModel, RotationModel} from '../models';

export let calendarItems: CalendarModel[] = [
    {
        plantId: 1,
        plantName: 'Basil',
        sun: 'full',
        spacing: '25',
        water: 'often',
        germination: '5-7',
        calendar: {
            sow: [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            harvest: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
        }
    },
    {
        plantId: 2,
        plantName: 'Dill',
        sun: 'full',
        spacing: '45',
        water: 'often',
        germination: '10-14',
        calendar: {
            sow: [0,0,1,1,0,0,0,0,0,0,0,0],
            harvest: [0,0,0,0,0,0,1,1,0,0,0,0]
        }
    },
    {
        plantId: 3,
        plantName: 'Carrot',
        sun: 'full',
        spacing: '1-2',
        water: 'often',
        germination: '10-17',
        calendar: {
            sow: [0,0,0,1,1,1,1,0,0,0,0,0],
            harvest: [0,0,0,0,1,1,1,1,1,0,0,0]
        }
    },
    {
        plantId: 4,
        plantName: 'Radish',
        sun: 'full',
        spacing: '1',
        water: 'often',
        germination: '3-10',
        calendar: {
            sow: [0,0,1,1,1,1,1,0,0,0,0,0],
            harvest: [0,0,0,1,1,1,1,1,1,0,0,0]
        }
    },
    {
        plantId: 4,
        plantName: 'Onion',
        sun: 'full',
        spacing: '1',
        water: 'often',
        germination: '7-12',
        calendar: {
            sow: [0,0,1,1,0,0,0,0,0,0,0,0],
            harvest: [0,0,0,0,0,0,0,1,1,1,0,0]
        }
    }
]

export let companionPlants: CompanionsModel[] = [
    {
        plantId: 1,
        plantName: 'Basil',
        imageName: 'basil',
        friend: ['Borage', 'Marigold', 'Tomato'],
        foe: ['Cucumber', 'Fennel', 'Sage']
    },
    {
        plantId: 2,
        imageName: 'dill',
        plantName: 'Dill',
        friend: ['Cucumber', 'Lettuce', 'Basil'],
        foe: ['Cilantro', 'Tomato']
    },
    {
        plantId: 3,
        plantName: 'Tomato',
        imageName: 'tomato',
        friend: ['Basil', 'Marigold', 'Onion'],
        foe: ['Brassica', 'Dill', 'Potatoes']
    },
    {
        plantId: 3,
        plantName: 'Peas',
        imageName: 'green-peas',
        friend: ['Carrot', 'Radish', 'Turnip'],
        foe: ['Chives', 'Garlic', 'Onion']
    },
    {
        plantId: 3,
        plantName: 'Carrots',
        imageName: 'carrot',
        friend: ['Lettuce', 'Radish', 'Peas'],
        foe: ['Tomatoes', 'Dill', 'Potatoes']
    },
]


export let rotationCrops: RotationModel[] = [
    {
        yearId: 1,
        yearName: 'Year 1',
        plots: [
            {
                plotId: 11,
                plantName: 'Legume',
                imageName: 'green-peas'
            },
            {
                plotId: 12,
                plantName: 'Root',
                imageName: 'onion'
            },
            {
                plotId: 13,
                plantName: 'Leaf',
                imageName: 'lettuce'
            },
            {
                plotId: 14,
                plantName: 'Fruit',
                imageName: 'apple'
            }
        ]
    },
    {
        yearId: 2,
        yearName: 'Year 2',
        plots: [
            {
                plotId: 14,
                plantName: 'Fruit',
                imageName: 'apple'
            },
            {
                plotId: 11,
                plantName: 'Legume',
                imageName: 'green-peas'
            },
            {
                plotId: 12,
                plantName: 'Root',
                imageName: 'onion'
            },
            {
                plotId: 13,
                plantName: 'Leaf',
                imageName: 'lettuce'
            }
        ]
    },
    {
        yearId: 3,
        yearName: 'Year 3',
        plots: [
            {
                plotId: 13,
                plantName: 'Leaf',
                imageName: 'lettuce'
            },
            {
                plotId: 14,
                plantName: 'Fruit',
                imageName: 'apple'
            },
            {
                plotId: 11,
                plantName: 'Legume',
                imageName: 'green-peas'
            },
            {
                plotId: 12,
                plantName: 'Root',
                imageName: 'onion'
            }
        ]
    },
    {
        yearId: 4,
        yearName: 'Year 4',
        plots: [
            {
                plotId: 12,
                plantName: 'Root',
                imageName: 'onion'
            },
            {
                plotId: 13,
                plantName: 'Leaf',
                imageName: 'lettuce'
            },
            {
                plotId: 14,
                plantName: 'Fruit',
                imageName: 'apple'
            },
            {
                plotId: 11,
                plantName: 'Legume',
                imageName: 'green-peas'
            }
        ]
    }
]