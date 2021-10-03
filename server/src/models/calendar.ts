import {MonthsModel} from "./months";

export interface CalendarModel {
    plantId: number;
    plantName: string;
    sun: string;
    spacing: string;
    water: string;
    germination: string;
    calendar: MonthsModel[]
}

