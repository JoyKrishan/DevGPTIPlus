    const selectElement = document.getElementById('lessonSelect');
    updateDatabaseAndDisplay(completionLessonScoreInPercentage).then(() => chooseLesson(lessons, currentLesson + 1))
    return new Promise((resolve, reject) => {
        setupDB().then((database => {
                registerBadge(database, 'Lesson_' + currentLesson);
                registerLessonScore(database, completionLessonScoreInPercentage, currentLesson);
                displayStatistics(database);
                resolve();
            }
        ));
    });