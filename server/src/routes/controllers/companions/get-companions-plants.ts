import { Request, Response } from 'express';

import { repository } from '../../../persistence';

export const getCompanionsPlants = async (req: Request, res: Response) => {
    try {
        const getCompanionResult = await repository.getCompanionPlants();
        res.status(200);
        res.send(getCompanionResult);

    } catch (err) {
        console.log(err);
        res.status(500);
        res.send({ error: 'An unknown error occured' });
    }
};