"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors = require('cors');
const app = (0, express_1.default)();
const startApp = () => {
    app.use(cors({
        origin: 'http://localhost:8080',
        optionsSuccessStatus: 200
    }));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    if (process.env.NODE_ENV === 'development') {
        app.listen(process.env.PORT, () => {
            return console.log(`server is listening on ${process.env.PORT}`);
        });
    }
};
const createRoutes = () => {
    routes_1.routes.forEach((route) => {
        app[route.method](route.path, route.handler);
    });
};
startApp();
createRoutes();
