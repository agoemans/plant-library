require('dotenv').config();

import { InMemory } from './in-memory';

export const createRepo = () => {
    return new InMemory();
};

export const repository = createRepo();