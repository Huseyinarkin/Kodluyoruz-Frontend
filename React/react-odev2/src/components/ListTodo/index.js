import React from 'react'

function ListTodo({todoList, setTodoList, hide}) {

    const listView = (e) => {
        if (hide === "all") {
            return e === true ? 'completed' : ''
        } else if (hide === "active") {
            return e === true ? 'hidden' : ''
        } else if (hide === "completed") {
            return e === true ? 'completed' : 'hidden'
        }
    }

    return (
        <section className="main">
            <input id='toggle-all' className="toggle-all" type="checkbox" onChange={(e) => {
                setTodoList(todoList.map((value) => {

                    return { ...value, status: (e.target.checked ? true : false) }
                }));
            }} />
            <label htmlFor="toggle-all" >
                Mark all as complete
            </label>

            <ul className="todo-list">
                {todoList.map((todo) => (
                    <li key={todo.id} className={listView(todo.status)}>
                        <div className="view">
                            <input className="toggle" type="checkbox" defaultChecked={todo.status} onClick={() => {
                                setTodoList(todoList.map(value => value.id === todo.id ? { ...value, status: !value.status } : value));
                            }} />
                            <label >{todo.name}</label>
                            <button className="destroy" onClick={() => {
                                setTodoList(todoList.filter(value => value.id !== todo.id));
                            }} ></button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ListTodo