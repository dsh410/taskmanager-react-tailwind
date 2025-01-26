
import axios from 'axios';

export const UpdateTodoItem = async (id, title, description) => {
    try {
        await axios.put(`http://localhost:5000/api/v1/taskitems/${id}`,
            {
                title,
                description,
            },
        );

    } catch (error) {
        console.error('Error fetching todo items:', error);
        throw error;
    }
};

export const UpdateTodoStatues = async (id, completed) => {
    try {

        await axios.put(`http://localhost:5000/api/v1/taskitems/${id}`,
            {
                isCompleted: completed,
            },
        );

    } catch (error) {
        console.error('Error fetching todo items:', error);
        throw error;
    }
};

export const createTodoItem = async (title, description) => {
    try {
        await axios.post(`http://localhost:5000/api/v1/taskitems/`,
            {
                title,
                description
            },
        );

    } catch (error) {
        console.error('Error fetching todo items:', error);
        throw error;
    }
};

export const deleteTodoItem = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/api/v1/taskitems/${id}`);

    } catch (error) {
        console.error('Error fetching todo items:', error);
        throw error;
    }
};

