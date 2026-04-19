export default function PlayerColumn({ name }) {
    return (
        <div className="column">
            <div className={`team-header`}>{name}</div>
            <div>Settlers: 0</div>
            <div>Sectors: xxx</div>
        </div>
    );
}
