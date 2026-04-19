import GameActions from './GameActions.tsx';
import Board from './Board.tsx';

export default function GameBoard() {
    return (
        <div className="column">
            <Board />
            <GameActions />
        </div>
    );
}
