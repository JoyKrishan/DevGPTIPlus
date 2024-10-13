        const timeSpent = 120; // Ajouter une valeur pour timeSpent
        const result = await registerLessonScore(database, 80, 1, timeSpent);
        const initialTimeSpent = 100;
        await registerLessonScore(database, 80, 1, initialTimeSpent);
        const newTimeSpent = 150; // Ajouter une nouvelle valeur pour timeSpent
        const result = await registerLessonScore(database, 85, 1, newTimeSpent);