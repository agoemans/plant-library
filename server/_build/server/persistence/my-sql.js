"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlClient = void 0;
const mysql = require('mysql');
class MySqlClient {
    constructor() {
        this.connector = mysql.createConnection({
            host: process.env.HOST,
            database: process.env.DATABASE,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD
        });
        this.query = (sql, args) => {
            return new Promise((resolve, reject) => {
                this.connector.query(sql, args, (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(rows);
                });
            });
        };
        this.getCalendarItems = () => __awaiter(this, void 0, void 0, function* () {
            // todo implement
            const query = null;
            try {
                const calendarResult = yield this.query(query);
                return [];
            }
            catch (err) {
                throw new Error('Could not get all Calendar Items: ' + err);
            }
        });
        this.getCompanionPlants = () => __awaiter(this, void 0, void 0, function* () {
            // todo implement
            const query = null;
            try {
                const compantionResult = yield this.query(query);
                return [];
            }
            catch (err) {
                throw new Error('Could not get all companion plants: ' + err);
            }
        });
        this.getCropRotationList = () => __awaiter(this, void 0, void 0, function* () {
            // todo implement
            const query = null;
            try {
                const rotationResult = yield this.query(query);
                return [];
            }
            catch (err) {
                throw new Error('Could not get all crop rotation plants: ' + err);
            }
        });
        this.connector.connect((err) => {
            if (err)
                throw err;
            console.log("Connected!");
        });
    }
}
exports.MySqlClient = MySqlClient;
