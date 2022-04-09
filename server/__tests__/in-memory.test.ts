import { CalendarModel, CompanionsModel, RotationModel } from '../src/models';
import {InMemory} from "../src/persistence/in-memory";

describe("test that in-memory functions work", () => {
    const repository: InMemory = new InMemory();

    it("should return a list of items", async () => {
        const items: CalendarModel[] = await repository.getCalendarItems();
        expect(items.length).toBeGreaterThan(0);
    });

    it("should have calendar property with sow and harvest props", async () => {
        const items: CalendarModel[] = await repository.getCalendarItems();
        let hasProps: boolean = true;
        items.forEach((item: CalendarModel) => {
            if(item.hasOwnProperty('sow') || item.hasOwnProperty('harvest')) {
                hasProps = false;
            }
        })
        expect(hasProps).toEqual(true);
    });

    it("should have sow and harvest properties with array length of twelve and values or 1 or 0", async () => {
        const items: CalendarModel[] = await repository.getCalendarItems();
        let hasRightLength: boolean = true;
        let hasCorrectValues: boolean = true;

        const NumOfMonthsInYear: number = 12;
        items.forEach((item: CalendarModel) => {
            if(item.calendar.sow.length !== NumOfMonthsInYear || item.calendar.harvest.length !== NumOfMonthsInYear) {
                hasRightLength = false;
            }

            const sowItems = item.calendar.sow.find(i => i !== 1 && i !== 0);
            const harvestItems = item.calendar.harvest.find(i => i !== 1 && i !== 0);

            if (sowItems || harvestItems) {
                hasCorrectValues = false;
            }
        })
        expect(hasRightLength).toEqual(true);
        expect(hasCorrectValues).toEqual(true);
    });
});