import {registerBadge, registerLessonScore, setupDB} from "../../src/shared/js/indexedDB";
    let database;
    beforeEach(async () => {
        database = await setupDB();
    });

    afterEach(() => {
        database.close();
    });
        // GIVEN
        // WHEN
        const result = await registerLessonScore(database, 80,1);
        // THEN
        expect(result).toBe('Lesson added successfully');
        // GIVEN
        await registerLessonScore(database, 80, 1);
        // WHEN
        const result = await registerLessonScore(database, 85,1);
        // THEN
        expect(result).toBe('Lesson updated successfully');
    it('should add new badge if data does not exist', async () => {
        // GIVEN
        // WHEN
        const result = await registerBadge(database, "Lesson_1");
        // THEN
        expect(result).toBe('Badge added successfully');
    });

    it('should modify badge', async () => {
        // GIVEN
        await registerBadge(database, "Lesson_1");
        // WHEN
        const result = await registerBadge(database, "Lesson_1");

        // THEN
        expect(result).toBe('Badge updated successfully');
    });
});