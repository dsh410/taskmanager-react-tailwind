
import axios from 'axios';

export const getTodoItems = async (setTodoItems) => {
    try {
        const response = await axios.get('http://localhost:5000/api/v1/taskitems', {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5173'
            }
        });
        setTodoItems(response.data.result)
    } catch (error) {
        console.error('Error fetching todo items:', error);
        throw error;
    }
};

export const UpdateTodoItem = async (id, title, description) => {
    try {
        await axios.put(`http://localhost:5000/api/v1/taskitems/${id}`,
            {
                title,
                description
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:5173'
                }
            }
        );

    } catch (error) {
        console.error('Error fetching todo items:', error);
        throw error;
    }
};

