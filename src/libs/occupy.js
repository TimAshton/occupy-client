import { v4 as uuidv4 } from 'uuid';

function startGame() {
    const gameId = uuidv4();

    return {
        gameId: gameId,
        turnIndicator: 1,
    };
}

function takeTurn() {
    return {
        timestamp: 0,
        sectorId: 2,
        outcome: 'defeat',
    };
}

function getSectorOwner() {
    return true;
}

export { startGame, takeTurn };
