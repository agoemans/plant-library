import { CalendarModel, CompanionsModel, RotationModel } from '../models';

import {calendarItems, companionPlants, rotationCrops} from './test-data';
import {Repository} from "./repository";

export class InMemory implements Repository {

    calendarItems: CalendarModel[] = calendarItems;

    companionPlants: CompanionsModel[]  = companionPlants;

    cropRotationlist: RotationModel[] = rotationCrops;

    query = ( sql: string, args?: any ): Promise<unknown> => {
        return ;
    };

    getCalendarItems = async () => this.calendarItems;

    getCompanionPlants = async () => this.companionPlants;

    getCropRotationList = async () => this.cropRotationlist;
}