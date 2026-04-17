import { it, describe, expect } from 'vitest';

import { startGame, takeTurn, createSector } from '../../src/libs/occupy';

describe('newGame', () => {
    it('should return a predictable, new game object.', () => {
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

        const newGame = startGame();

        expect(newGame).toEqual({
            gameId: expect.stringMatching(uuidRegex),
            turnIndicator: 1,
        });
    });
});

describe('takeTurn', () => {
    it('should return a predicted turn result object', () => {
        const takeTurnResponse = takeTurn();

        const expectedTakeTurnResponse = {
            timestamp: 0,
            sectorId: expect.toSatisfy(Number.isInteger),
            outcome: expect.stringMatching(/^(victory|defeat|draw)$/),
        };

        expect(takeTurn()).toStrictEqual(expectedTakeTurnResponse);
    });

    it.skip('should update turnIndicator when turn is over', () => {});
});

describe('createSector', () => {
    it('should return a predictable sector object', () => {
        const expected = {
            x: 1,
            y: 1,
            owner: '',
            settlerCount: 0,
        };

        const result = createSector(1, 1);
        expect(result).toStrictEqual(expected);
    });
});
