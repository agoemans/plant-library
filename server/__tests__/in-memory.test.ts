import { CalendarModel, CompanionsModel, RotationModel } from '../src/models';
import {InMemory} from "../src/persistence/in-memory";

describe("test that in-memory functions work", () => {
    const repository: InMemory = new InMemory();

    it("should return a list of calendar items", async () => {
        const items: CalendarModel[] = await repository.getCalendarItems();
        expect(items.length).toBeGreaterThan(0);
    });
});