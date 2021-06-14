import React from 'react'
import Todo from './Todo'

export default function Todolist({ todolist,delTodo }) {

    return (
        <div>
            {todolist.map((todo,index) => {
            return <Todo key={todo.id} todo={todo} onDeltodo={delTodo} />;
        })}
        </div>
    )
}

