import { CalendarModel, CompanionsModel, RotationModel } from '../models';

export interface Repository {
    getCalendarItems: () => Promise<CalendarModel[]>;

    getCompanionPlants: () => Promise<CompanionsModel[]>;

    getCropRotationList: () => Promise<RotationModel[]>;
}