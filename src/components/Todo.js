import React from 'react'
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'; 

export default function Todo({todo,onDeltodo}) {

    return (
        <div>
            <p>{todo.name}</p><Button onClick={() => onDeltodo(todo.id)} >Xóa</Button>
        </div>
    )
}
