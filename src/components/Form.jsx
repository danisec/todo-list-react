import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        )
        setTodos(newTodo)
        setEditTodo('')
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        } else {
            setInput('')
        }
    }, [setInput, editTodo])

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }])

            setInput('')
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    }

    return (
        <>
            <div>
                <form className='flex flex-col ms:flex-row gap-6 items-center' onSubmit={onFormSubmit}>

                    <div>
                        <input
                            type="text"
                            className='block p-4 w-full lg:w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500'
                            placeholder='Write a Todo...'
                            value={input}
                            required
                            onChange={onInputChange}
                        />
                    </div>

                    <div>
                        <button className='bg-black hover:bg-gray-900 text-white text-base md:text-lg font-semibold py-2 px-4 rounded-md w-full' type='submit'>{editTodo ? 'Ok' : 'Add Todo'}</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form