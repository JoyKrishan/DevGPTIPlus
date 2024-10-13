let database;
beforeEach(async () => {
    database = await setupDB();

    // EN VRAI IL VAUDRAIT MIEUX SEPARER LA LOGIQUE ET PAS FAIRE DISPLAY STATISTICS DANS LE SETUP
    document.getElementById = jest.fn().mockImplementation((id) => {
        if (id === 'badgeListItems') {
            return { innerHTML: '' }; // Mock d'un élément simplifié
        }
        return null;
    });
});

afterEach(() => {
    database.close();
    it('should modify lesson if score is higher', async () => {
        // Simulez un scénario où `getLesson` ne retourne pas de données

        // Appel de votre fonction
        const result = await registerLessonScore(85,1);

        // Assertions pour vérifier que `lessonStore.add` a été appelé et que le résultat est correct
        expect(result).toBe('Updated successfully');
        // Autres assertions si nécessaire
    });

    // QUAND JE RAJOUTE CE DEUXIEME TEST CA FAIT :  let badgeListElement = document.getElementById('badgeListItems');
    //     > 116 |         badgeListElement.innerHTML = ''; .........................


});

// it('should modify lesson if score is higher', async () => {
//     // Exemple d'utilisation de la base de données 'db'
//     // let transaction = database.transaction(["lessons"], "readwrite");
//     // let store = transaction.objectStore("lessons");
//     // store.add({ lessonId: 1, score: 80 });
//
//     const result = await registerLessonScore(85,1);
//     expect(result).toBe('Updated successfully');
// });