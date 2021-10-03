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
exports.getCropRotationList = void 0;
const persistence_1 = require("../../../persistence");
const getCropRotationList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getRotationResult = yield persistence_1.repository.getCropRotationList();
        res.status(200);
        res.send(getRotationResult);
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.send({ error: 'An unknown error occured' });
    }
});
exports.getCropRotationList = getCropRotationList;
