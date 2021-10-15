import { Request, Response } from 'express';

import * as controllers from './controllers';

export interface Route {
    method: 'get' | 'post' | 'delete';
    path: string;
    handler: (req: Request, res: Response) => unknown;
}

export const routes: Route[] = [
    {
        method: 'get',
        path: '/api/calendar',
        handler: controllers.getCalendarItems
    },
    {
        method: 'get',
        path: '/api/companions',
        handler: controllers.getCompanionsPlants
    },
    {
        method: 'get',
        path: '/api/rotation',
        handler: controllers.getCropRotationList
    },
];