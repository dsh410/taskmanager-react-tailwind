import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { UpdateTodoItem } from '../utils/api';



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
        setShowAddTodoForm(prev => !prev);
    }

    const handleSaveUpdate = (title, description) => {
        setShowAddTodoForm(prev => !prev)
        // Replace console.log with a proper logging mechanism if needed
        // Example: logToService(id, title, description);
        if(!id || !title ){
            return;
        }
        UpdateTodoItem(id,title,description);
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