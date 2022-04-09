import { Request, Response } from 'express';

import * as controllers from './controllers';
import { RouteNames } from '../types/route-names';

export interface Route {
    method: 'get' | 'post' | 'delete';
    path: string;
    handler: (req: Request, res: Response) => unknown;
}

export const routes: Route[] = [
    {
        method: 'get',
        path: `/api/${RouteNames.CALENDAR}`,
        handler: controllers.getCalendarItems
    },
    {
        method: 'get',
        path: `/api/${RouteNames.COMPANIONS}`,
        handler: controllers.getCompanionsPlants
    },
    {
        method: 'get',
        path: `/api/${RouteNames.ROTATION}`,
        handler: controllers.getCropRotationList
    },
];