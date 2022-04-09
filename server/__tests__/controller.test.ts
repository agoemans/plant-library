import { RouteNames } from '../src/types/route-names';

require('dotenv').config();

import express from 'express';
import {routes} from '../src/routes';

const cors = require('cors');
const app = express();
const request = require("supertest");

import {calendarItems, companionPlants, rotationCrops} from '../src/persistence/test-data';

const startApp = () => {
    app.use(cors({
        array: [process.env.DEV_URL, process.env.PROD_URL],
        optionsSuccessStatus: 200
    }));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    if (process.env.NODE_ENV === 'development') {
        app.listen(process.env.PORT, () => {
            return console.log(`server is listening on ${process.env.PORT}`);
        });
    }
};

const createRoutes = () => {
    routes.forEach((route) => {
        app[route.method](route.path, route.handler);
    });
};

startApp();
createRoutes();

test("rotation controller works", done => {
    request(app)
        .get(`/api/${RouteNames.ROTATION}`)
        .expect("Content-Type", /json/)
        .expect(rotationCrops)
        .expect((res) => {
            res.body.length = 4
        })
        .expect(200, done);
});

test("calendar controller works", done => {
    request(app)
        .get(`/api/${RouteNames.CALENDAR}`)
        .expect("Content-Type", /json/)
        .expect(calendarItems)
        .expect(200, done);
});

test("companion controller works", done => {
    request(app)
        .get(`/api/${RouteNames.COMPANIONS}`)
        .expect("Content-Type", /json/)
        .expect(companionPlants)
        .expect(200, done);
});