import axios from 'axios';

const getTodoItems = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/v1/taskitems', {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5173'
            }
        });
        console.log('this is response data', response.data.Data);
        return response.data.Data;
    } catch (error) {
        console.error('Error fetching todo items:', error);
        throw error;
    }
};

export default getTodoItems;