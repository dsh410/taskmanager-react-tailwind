
import TaskItem from './TaskItem'
import { useEffect, useContext } from 'react';
import TaskInputForm from './TaskInputForm';
import { getTodoItems } from '../utils/api';
import PropTypes from 'prop-types';
import TasksContext from '../context/TasksContext';






export default function TaskList({ showAddTodoForm, setShowAddTodoForm }) {
    const { setTodoItems, todoItems } = useContext(TasksContext);



    useEffect(() => {
        const fetchItems = async () => {
            const items = await getTodoItems();
            setTodoItems(items);
        };
        fetchItems();
    },[]);


    return (
        <>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-0">
                {todoItems.map((todo) => (
                    <>
                        <TaskItem todo={todo} setShowAddTodoForm={setShowAddTodoForm} showAddTodoForm={showAddTodoForm} />
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