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
exports.InMemory = void 0;
const test_data_1 = require("./test-data");
class InMemory {
    constructor() {
        this.calendarItems = test_data_1.calendarItems;
        this.companionPlants = test_data_1.companionPlants;
        this.cropRotationlist = test_data_1.rotationCrops;
        this.query = (sql, args) => {
            return;
        };
        this.getCalendarItems = () => __awaiter(this, void 0, void 0, function* () { return this.calendarItems; });
        this.getCompanionPlants = () => __awaiter(this, void 0, void 0, function* () { return this.companionPlants; });
        this.getCropRotationList = () => __awaiter(this, void 0, void 0, function* () { return this.cropRotationlist; });
    }
}
exports.InMemory = InMemory;
