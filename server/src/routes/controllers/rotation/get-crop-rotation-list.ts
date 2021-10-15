import { Request, Response } from 'express';

import { repository } from '../../../persistence';

export const getCropRotationList = async (req: Request, res: Response) => {
    try {
        const getRotationResult = await repository.getCropRotationList();
        res.status(200);
        res.send(getRotationResult);

    } catch (err) {
        console.log(err);
        res.status(500);
        res.send({ error: 'An unknown error occured' });
    }
};