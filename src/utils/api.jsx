
import axios from 'axios';

export const getTodoItems = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/v1/taskitems', {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5173'
            }
        });
        return response.data.result;
    } catch (error) {
        console.error('Error fetching todo items:', error);
        throw error;
    }
};

export const UpdateTodoItem = async (id, title, description) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/v1/taskitems/${id}`,
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
        console.log(response);
    } catch (error) {
        console.error('Error fetching todo items:', error);
        throw error;
    }
};

