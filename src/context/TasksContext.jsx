import { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { UpdateTodoItem, createTodoItem, deleteTodoItem } from '../utils/api';
import axios from 'axios';



const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [todoItems, setTodoItems] = useState([]);
    const [showAddTodoForm, setShowAddTodoForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState('');
    const [todoStatues, setTodoStatues] = useState(false);
    const [refetchTrigger, setRefetchTrigger] = useState(false);

    const handleRefetch = () => {
        setRefetchTrigger(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowAddTodoForm(false);
    }

    const handleOnClickCreate = () => {
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
        setShowAddTodoForm(prev => !prev);
    }

    const handleDelete = (id) => {
        deleteTodoItem(id);
        handleRefetch();
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
        handleRefetch();
        setTitle('');
        setDescription('');
    }

    const fetchTodoItems = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/taskitems');
            setTodoItems(response.data.result);
            return response.data.result;
        } catch (error) {
            console.error('Error fetching todo items:', error);
            throw error;
        }
    }, [setTodoItems]);

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
        handleOnClickCreate,
        handleDelete,
        fetchTodoItems,
        refetchTrigger,
        handleRefetch,
        setRefetchTrigger,
        todoStatues,
        setTodoStatues,
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