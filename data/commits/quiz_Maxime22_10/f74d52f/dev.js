// https://dev.to/andyhaskell/testing-your-indexeddb-code-with-jest-2o17
import {registerLessonScore, setupDB} from "../../src/shared/js/indexedDB";
import "fake-indexeddb/auto";

if (typeof structuredClone === 'undefined') {
    global.structuredClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
}

test('test setupDB', async() => {
    await expect(setupDB()).resolves.toBe('peanut butter');
});

// A QUOI SERT DESCRIBE ?
describe('registerLessonScore', () => {
    // Mock de votre IndexedDB ou de l'objet lessonStore
    // beforeEach(() => {
    //     // Initialisez votre fausse base de données ou créez des mocks pour les méthodes de lessonStore
    // });

    it('should add new lesson if data does not exist', async () => {
        // Simulez un scénario où `getLesson` ne retourne pas de données

        // Appel de votre fonction
        const result = await registerLessonScore(80,1);

        // Assertions pour vérifier que `lessonStore.add` a été appelé et que le résultat est correct
        expect(result).toBe('Added successfully');
        // Autres assertions si nécessaire
    });

    // Autres tests pour couvrir les cas d'erreur, etc.
});