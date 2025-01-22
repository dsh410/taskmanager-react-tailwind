
import TaskItem from './TaskItem'
import { useEffect, useContext } from 'react';
import TaskInputForm from './TaskInputForm';
import { getTodoItems } from '../utils/api';
import PropTypes from 'prop-types';
import TasksContext from '../context/TasksContext';

export default function TaskList() {
    const { setTodoItems, todoItems, showAddTodoForm } = useContext(TasksContext);

    useEffect(() => {
        getTodoItems(setTodoItems);
    }, [setTodoItems, todoItems]);

    return (
        <>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-0">
                {todoItems.map((todo) => (
                    <>
                        <TaskItem todo={todo} />
                    </>
                ))}
            </ul>
            {showAddTodoForm && <TaskInputForm />}
        </>
    )
}

TaskList.propTypes = {
    showAddTodoForm: PropTypes.bool.isRequired,
    setShowAddTodoForm: PropTypes.func.isRequired,
};