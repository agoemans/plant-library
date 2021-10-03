import { CalendarModel, CompanionsModel, RotationModel } from '../models';

export interface Repository {
    query: ( sql: string, args?: any ) => Promise<unknown>;

    getCalendarItems: () => Promise<CalendarModel[]>;

    getCompanionPlants: () => Promise<CompanionsModel[]>;

    getCropRotationList: () => Promise<RotationModel[]>;
}