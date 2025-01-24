import { PlusIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types';
import { useContext } from 'react';
import TasksContext from '../context/TasksContext';

export default function AddTodoButton() {
  const { handleOnClickCreate } = useContext(TasksContext);

  return (
    <>
      <button
        onClick={handleOnClickCreate}
        type="button"
        className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <PlusIcon aria-hidden="true" className="size-5" />
      </button>
    </>
  )
}

AddTodoButton.propTypes = {
  handleOnClickCreate: PropTypes.func.isRequired,
};
