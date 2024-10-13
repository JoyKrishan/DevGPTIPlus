const Basho = require('./basho.js');

describe('Basho Class', () => {
    let basho;
    beforeEach(() => {
        basho = new Basho(1, 1); // First argument is bashoId, second is waveId
    });

    test('selectWrestler() should add player pick to the basho', () => {
        basho.selectWrestler('player1', 'wrestler1');
        expect(basho.getPlayerPick('player1')).toBe('wrestler1');
    });

    test('selectWrestler() should not overwrite existing pick', () => {
        basho.selectWrestler('player1', 'wrestler1');
        basho.selectWrestler('player1', 'wrestler2');
        expect(basho.getPlayerPick('player1')).toBe('wrestler1');
    });

    test('changePick() should change player pick', () => {
        basho.selectWrestler('player1', 'wrestler1');
        basho.changePick('player1', 'wrestler2');
        expect(basho.getPlayerPick('player1')).toBe('wrestler2');
    });

    test('getAllPicks() should return all picks', () => {
        basho.selectWrestler('player1', 'wrestler1');
        basho.selectWrestler('player2', 'wrestler2');
        expect(basho.getAllPicks()).toEqual({
            player1: 'wrestler1',
            player2: 'wrestler2'
        });
    });
});