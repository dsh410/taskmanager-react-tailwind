'use client'
import TaskList from '../components/TaskList'
import AddTodoButton from '../components/AddTodoButton'
import { useContext } from 'react'
import TasksContext from '../context/TasksContext'

const teams = [
  { id: 1, name: 'Incompleted', href: '#', initial: 'I', current: false },
  { id: 2, name: 'Completed', href: '#', initial: 'C', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const {
    showAddTodoForm,
    setShowAddTodoForm,
    setTodoStatues,
    setIsCompleted,
    setId,
  } = useContext(TasksContext);

  const handleClick = (name) => {
    if (name === 'Incompleted') {
      setIsCompleted(true);
      setTodoStatues(false);
      setId('');
    }
    if (name === 'Completed') {
      setIsCompleted(false);
      setTodoStatues(true);
      setId('');

    }
  }

  return (
    <>
      <div>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                </li>
                <li>
                  <div className="text-xs/6 font-semibold text-gray-400">Your Todo Items</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                              'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                            )}
                          >
                            {team.initial}
                          </span>
                          <span onClick={() => handleClick(team.name)} className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
          </div>
          <main className="py-10">
            <AddTodoButton />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <TaskList setShowAddTodoForm={setShowAddTodoForm} showAddTodoForm={showAddTodoForm} />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
