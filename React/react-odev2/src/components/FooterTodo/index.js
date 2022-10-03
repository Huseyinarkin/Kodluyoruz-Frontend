import React from 'react'

function FooterTodo({todoList, setTodoList, hide, setHide}) {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todoList.filter(value => value.status === false).length} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className={hide === "all" && "selected"} onClick={() => (setHide("all"))} >All</a>
                </li>
                <li>
                    <a href="#/" className={hide === "active" && "selected"} onClick={() => (setHide("active"))} >Active</a>
                </li>
                <li>
                    <a href="#/" className={hide === "completed" && "selected"} onClick={() => (setHide("completed"))} >Completed</a>
                </li>
            </ul>
            {
                todoList.some(value => value.status === true) && <button className="clear-completed" onClick={() => {
                    setTodoList(todoList.filter(value => value.status === false));
                }} >
                    Clear completed
                </button>
            }
        </footer>
    )
}

export default FooterTodo