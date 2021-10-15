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
        plantName: 'Parsley',
        imageName: 'parsley',
        friend: ['Brassicas', 'Tomatoes', 'Peppers'],
        foe: ['Garlic', 'Onion', 'Lettuce']
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
                imageName: 'spinach'
            },
            {
                plotId: 12,
                plantName: 'Root',
                imageName: 'spinach'
            },
            {
                plotId: 13,
                plantName: 'Leaf',
                imageName: 'spinach'
            },
            {
                plotId: 14,
                plantName: 'Fruit',
                imageName: 'spinach'
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
                imageName: 'spinach'
            },
            {
                plotId: 11,
                plantName: 'Legume',
                imageName: 'spinach'
            },
            {
                plotId: 12,
                plantName: 'Root',
                imageName: 'spinach'
            },
            {
                plotId: 13,
                plantName: 'Leaf',
                imageName: 'spinach'
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
                imageName: 'spinach'
            },
            {
                plotId: 14,
                plantName: 'Fruit',
                imageName: 'spinach'
            },
            {
                plotId: 11,
                plantName: 'Legume',
                imageName: 'spinach'
            },
            {
                plotId: 12,
                plantName: 'Root',
                imageName: 'spinach'
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
                imageName: 'spinach'
            },
            {
                plotId: 13,
                plantName: 'Leaf',
                imageName: 'spinach'
            },
            {
                plotId: 14,
                plantName: 'Fruit',
                imageName: 'spinach'
            },
            {
                plotId: 11,
                plantName: 'Legume',
                imageName: 'spinach'
            }
        ]
    }
]