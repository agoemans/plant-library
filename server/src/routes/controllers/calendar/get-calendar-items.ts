import { Request, Response } from 'express';

import { repository } from '../../../persistence';

export const getCalendarItems = async (req: Request, res: Response) => {
    try {
        const getCalendarResult = await repository.getCalendarItems();
        res.status(200);
        res.send(getCalendarResult);

    } catch (err) {
        console.log(err);
        res.status(500);
        res.send({ error: 'NOT IMPLEMENTED: Calendar items' });
    }
};