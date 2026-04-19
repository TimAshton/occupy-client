import { useState } from 'react';

import PlayerColumn from './components/PlayerColumn.js';
import GameColumn from './components/GameColumn.js';
import CreateGame from './components/CreateGame.js';

import { createSector } from './libs/occupy.js';

const sectors_arr = [
    createSector(1, 1),
    createSector(1, 2),
    createSector(1, 3),
    createSector(1, 4),
    createSector(1, 5),
    createSector(2, 1),
    createSector(2, 2),
    createSector(2, 3),
    createSector(2, 4),
    createSector(2, 5),
    createSector(3, 1),
    createSector(3, 2),
    createSector(3, 3),
    createSector(3, 4),
    createSector(3, 5),
    createSector(4, 1),
    createSector(4, 2),
    createSector(4, 3),
    createSector(4, 4),
    createSector(4, 5),
    createSector(5, 1),
    createSector(5, 2),
    createSector(5, 3),
    createSector(5, 4),
    createSector(5, 5),
];

function App() {
    const [gameId, setGameId] = useState(undefined);

    return (
        <>
            {gameId ? (
                <div className="container">
                    <PlayerColumn name="Blue" />
                    <GameColumn />
                    <PlayerColumn name="Red" />
                </div>
            ) : (
                <CreateGame />
            )}
        </>
    );
}

export default App;
