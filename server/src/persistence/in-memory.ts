import { CalendarModel, CompanionsModel, RotationModel } from '../models';

import {calendarItems, companionPlants, rotationCrops} from './test-data';
import {Repository} from "./repository";

export class InMemory implements Repository {

    calendarItems: CalendarModel[] = calendarItems;

    companionPlants: CompanionsModel[]  = companionPlants;

    cropRotationList: RotationModel[] = rotationCrops;

    getCalendarItems = async () => this.calendarItems;

    getCompanionPlants = async () => this.companionPlants;

    getCropRotationList = async () => this.cropRotationList;
}