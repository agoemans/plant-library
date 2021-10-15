"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository = exports.createRepo = void 0;
require('dotenv').config();
const in_memory_1 = require("./in-memory");
const createRepo = () => {
    // if (process.env.NODE_ENV !== 'test') {
    //     return new DynamoClient();
    // }
    // return new MySqlClient();
    return new in_memory_1.InMemory();
};
exports.createRepo = createRepo;
exports.repository = (0, exports.createRepo)();
