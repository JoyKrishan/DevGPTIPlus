const Wave = require('./wave.js');
const Basho = require('./basho.js');

describe('Wave Class', () => {
    let wave;
    let basho1;
    let basho2;
    beforeEach(() => {
        wave = new Wave(1);
        basho1 = new Basho(1, 1);
        basho2 = new Basho(2, 1);
    });

    test('addBasho() should add a Basho to the wave', () => {
        wave.addBasho(basho1);
        expect(wave.bashos.length).toBe(1);
        expect(wave.bashos[0]).toBe(basho1);
    });

    test('getBasho() should return the correct Basho', () => {
        wave.addBasho(basho1);
        wave.addBasho(basho2);
        const retrievedBasho = wave.getBasho(2);
        expect(retrievedBasho).toBe(basho2);
    });
});