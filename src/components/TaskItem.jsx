
import PropTypes from 'prop-types';
import { useContext } from 'react';
import TasksContext from '../context/TasksContext';



export default function TaskItem({ todo, }) {
  const {
    handleUpdate,
    handleDelete,
  } = useContext(TasksContext);


  return (
    <div>
      <div key={todo._id} className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          <h3>{todo.title}</h3>
        </div>
        <div className="px-4 py-5 sm:p-6"> <h3>{todo.description}</h3></div>
        <div className="px-4 py-4 sm:px-6">
          <span className="isolate inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => handleUpdate(todo._id, event)}
              className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              Done
            </button>
            <button
              type="button"
              onClick={() => handleUpdate(todo._id, event)}
              className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => handleDelete(todo._id)}
              className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

TaskItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,

  }),
  setShowAddTodoForm: PropTypes.func.isRequired,
  showAddTodoForm: PropTypes.bool.isRequired,
};
