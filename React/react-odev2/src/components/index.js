import React, { useState } from 'react'
import AddTodo from './AddTodo/index.js';
import ListTodo from './ListTodo/index.js';
import FooterTodo from './FooterTodo/index.js';


function Todo() {

    const [hide, setHide] = useState('all');

    const [todoList, setTodoList] = useState([
        {
            id: "1",
            name: 'Learn JavaScript',
            status: true
        },
        {
            id: "2",
            name: 'Learn React',
            status: false
        },
        {
            id: "3",
            name: 'Have a life!',
            status: false
        }
    ]);

    return (
        <div>
            <section className="todoapp">
                <AddTodo setTodoList={setTodoList} todoList={todoList} />
                <ListTodo setTodoList={setTodoList} todoList={todoList} hide={hide} />
                <FooterTodo setTodoList={setTodoList} todoList={todoList} hide={hide} setHide={setHide} />
            </section>
            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </div>

    )
}

export default Todo