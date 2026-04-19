import Sector from './Sector.tsx';
import { sectorCount } from '../libs/occupy.js'

export default function Board() {
    const local_sectors = [];
    for (let i = 0; i < sectorCount; i++) {
        local_sectors.push(<Sector key={i} />);
    }

    return (
        <div>
            <div className="grid-container">{local_sectors}</div>
        </div>
    );
}
