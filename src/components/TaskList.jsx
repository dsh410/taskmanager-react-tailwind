
import TaskItem from './TaskItem'
import { useEffect, useState } from 'react';
import getTodoItems from '../api';


export default function TaskList() {
    const [todoItems, setTodoItems] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const items = await getTodoItems();
            setTodoItems(items);
        }
        fetchData();
    }, []);
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {todoItems.map((todo) => (
                <>
                    <TaskItem todo={todo} />
                </>

            ))}
        </ul>
    )
}
