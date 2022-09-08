import React, { useState, useEffect } from 'react'
import Header from './Header'
import Form from './Form'
import TodosList from './TodosList'

function Todos() {
    const initialState = JSON.parse(localStorage.getItem('todos')) || []

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState(initialState)
    const [editTodo, setEditTodo] = useState(null)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className='mt-12'>
                <Form
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                />
            </div>

            <div>
                <TodosList
                    todos={todos}
                    setTodos={setTodos}
                    setEditTodo={setEditTodo}
                />
            </div>
        </div>
    )
}

export default Todos
