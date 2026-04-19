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
        <div className="flex rounded-2x1">
            How many players?
            <select>
                <option>1</option>
                <option>2</option>
            </select>
            <button onClick={() => createClickHandler()}>Create Game</button>
            <h2>{JSON.stringify(data)}</h2>
        </div>
    );
}
