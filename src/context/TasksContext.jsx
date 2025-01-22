import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { UpdateTodoItem, createTodoItem, deleteTodoItem } from '../utils/api';



const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [todoItems, setTodoItems] = useState([]);
    const [showAddTodoForm, setShowAddTodoForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowAddTodoForm(false);
    }

    const handleOnClick = () => {
        setShowAddTodoForm(true);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'title') {
            setTitle(value);
        }

        if (name === 'description') {
            setDescription(value);

        }

    }

    const handleUpdate = (id) => {
        setId(id);
        console.log(id);
        setShowAddTodoForm(prev => !prev);
    }

    const handleDelete = (id) => {
        deleteTodoItem(id);
    }

    const handleSaveUpdate = (event, id, title, description) => {
        event.preventDefault();
        setShowAddTodoForm(prev => !prev)

        if (!id && !title) {
            return;
        }

        if (id) {
            UpdateTodoItem(id, title, description);
        }

        if (!id) {
            createTodoItem(title, description);
        }


    }

    const valueToShare = {
        title,
        description,
        todoItems,
        setTodoItems,
        handleSubmit,
        handleChange,
        showAddTodoForm,
        setShowAddTodoForm,
        setDescription,
        handleUpdate,
        handleSaveUpdate,
        id,
        handleOnClick,
        handleDelete,
        handleToggleAddTodoForm: () => setShowAddTodoForm(!showAddTodoForm),
    }
    return (
        <TasksContext.Provider value={valueToShare}>
            {children}
        </TasksContext.Provider>
    );
};

TasksProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TasksContext;