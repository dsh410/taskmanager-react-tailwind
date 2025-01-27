import PropTypes from 'prop-types';
import { useContext } from 'react';
import TasksContext from '../context/TasksContext';


const TaskInputForm = () => {
    const {
        showAddTodoForm,
        setShowAddTodoForm,
        handleChange,
        title,
        description,
        handleSubmit,
        handleSaveUpdate,
        id
    } = useContext(TasksContext);

    console.log('this is id', id);
    return (
        <div className="space-y-10 divide-y divide-gray-900/10  absolute z-10 top-1/4 right-1/4 ">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">

                <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" onSubmit={handleSubmit}>
                    <div className="px-4 py-6 sm:p-8">
                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="Title" className="block text-sm/6 font-medium text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                        <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
                                        <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            value={title}
                                            placeholder="todo item"
                                            onChange={() => handleChange(event)}
                                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="Description" className="block text-sm/6 font-medium text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        value={description}
                                        onChange={() => handleChange(event)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        defaultValue={''}
                                    />
                                </div>
                                <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences Description your next task item.</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900" onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={() => handleSaveUpdate(event, id, title, description)}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

TaskInputForm.propTypes = {
    showAddTodoForm: PropTypes.func.isRequired,
    setShowAddTodoForm: PropTypes.func.isRequired,
};

export default TaskInputForm;