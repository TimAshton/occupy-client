import { useState } from 'react';

export default function CreateGame() {
    const [data, setData] = useState([]);

    const createClickHandler = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos/1',
            );
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error', error);
        } finally {
            console.log('finally');
        }
    };

    return (
        <div className="my-15 flex flex-wrap items-center gap-6 p-4 w-full max-w-[420px] mx-auto">
            {/* Player Selection (Sets the height of the row) */}
            <div className="flex flex-col gap-1">
                <div className="text-sm font-medium">How many players?</div>
                <select className="border rounded-lg p-1.5 bg-white">
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>

            {/* Action Button - Aligned to bottom */}
            <div className="flex flex-col self-stretch justify-end">
                <button 
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => createClickHandler()}
                >
                    Create Game
                </button>
            </div>

            {/* Data Output */}
            <div className="flex-1 min-w-[200px] bg-slate-50 p-3 rounded-lg border border-slate-200 self-stretch flex items-end">
                <code className="text-xs break-all text-slate-600">
                    {JSON.stringify(data)}
                </code>
            </div>
        </div>
    );
}
