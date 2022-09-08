import React from 'react'

function TodosList({ todos, setTodos, setEditTodo }) {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)

        setEditTodo(findTodo)
    }

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <>
            <div className='mt-12'>
                <h2 className='text-xl text-gray-900 font-semibold'>Todos List</h2>
            </div>

            {todos.map((todo) => (
                <ul className='mt-6'>
                    <li className='flex gap-6' key={todo.id}>
                        <button className='complete' onClick={() => handleComplete(todo)}><i className={`uil uil-check-circle text-2xl ${todo.completed ? 'text-green-500' : ''}`}></i></button>

                        <input
                            type="text"
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${todo.completed ? 'border border-green-500' : ''}`}
                            value={todo.title}
                            onChange={(event) => event.preventDefault()}
                        />

                        <button className='edit' onClick={() => handleEdit(todo)}><i class="uil uil-edit text-2xl hover:text-blue-500"></i></button>

                        <button className='delete' onClick={() => handleDelete(todo)}><i class="uil uil-trash text-2xl hover:text-red-500"></i></button>

                    </li>
                </ul>
            )

            )}
        </>
    )
}

export default TodosList