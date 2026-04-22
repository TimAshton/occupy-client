import { useState } from 'react';

export default function CreateGame() {
    const [data, setData] = useState([]);
    const [inviteCode, setInviteCode] = useState();

    const createClickHandler = async () => {
        try {
            const response = await fetch(
                'https://dxgduggtf0.execute-api.us-west-2.amazonaws.com/prod/game/create',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ player_count: 1 }),
                },
            );
            const result = await response.json();
            setInviteCode(JSON.parse(result)['inviteCode']);
            setData(result);
        } catch (error) {
            console.error('Error', error);
        } finally {
            console.log('finally');
        }
    };

    return (
        <div className="my-15 flex flex-wrap items-center gap-6 p-4 w-full max-w-[420px] mx-auto">
            <div className="flex flex-col gap-1">
                <div className="text-sm font-medium">How many players?</div>
                <select className="border rounded-lg p-1.5 bg-white">
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <div className="flex flex-col self-stretch justify-end">
                <button
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => createClickHandler()}
                >
                    Create Game
                </button>
            </div>

            {true && (
                <div className="flex-1 min-w-[200px] bg-slate-50 p-3 rounded-lg border border-slate-200 self-stretch flex items-end">
                    <div>Invite Code:</div>
                    <div>{inviteCode}</div>
                </div>
            )}
        </div>
    );
}
