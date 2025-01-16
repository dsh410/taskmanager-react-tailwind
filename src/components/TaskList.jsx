
import TaskItem from './TaskItem'
import { useEffect, useState } from 'react';
import TaskInputForm from './TaskInputForm';
import getTodoItems from '../api';
import PropTypes from 'prop-types';


export default function TaskList({ showAddTodoForm, setShowAddTodoForm }) {

    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const items = await getTodoItems();
            setTodoItems(items);
        }
        fetchData();
    }, []);

    return (
        <>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-0">
                {todoItems.map((todo) => (
                    <>
                        <TaskItem todo={todo} />

                    </>

                ))}
            </ul>
            {showAddTodoForm && <TaskInputForm setShowAddTodoForm={setShowAddTodoForm} showAddTodoForm={showAddTodoForm} />}
        </>
    )
}

TaskList.propTypes = {
    showAddTodoForm: PropTypes.bool.isRequired,
    setShowAddTodoForm: PropTypes.func.isRequired,
};