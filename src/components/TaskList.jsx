
import TaskItem from './TaskItem'
import { useEffect, useContext } from 'react';
import TaskInputForm from './TaskInputForm';
import PropTypes from 'prop-types';
import TasksContext from '../context/TasksContext';

export default function TaskList() {
    const {
        todoItems,
        showAddTodoForm,
        fetchTodoItems,
        refetchTrigger,
        setRefetchTrigger,
        todoStatues,
    } = useContext(TasksContext);



    useEffect(() => {
        fetchTodoItems();

        return () => {
            setRefetchTrigger(false);
        }

    }, [fetchTodoItems, refetchTrigger]);

    return (
        <>
            {!todoStatues && (<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-0">
                {todoItems.filter(todo => todo.isCompleted === false).map((todo) => (
                    <>
                        <TaskItem todo={todo} />
                    </>
                ))}
            </ul>)
            }

            {todoStatues && (<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-0">
                {todoItems.filter(todo => todo.isCompleted === true).map((todo) => (
                    <>
                        <TaskItem todo={todo} />
                    </>
                ))}
            </ul>)
            }

            {showAddTodoForm && <TaskInputForm />}
        </>
    )
}

TaskList.propTypes = {
    showAddTodoForm: PropTypes.bool.isRequired,
    setShowAddTodoForm: PropTypes.func.isRequired,
};