import React from 'react'
import IndividualTodo from '../IndividualTodo/IndividualTodo'

export default function Todos({todos, deleteTodo}) {
    return todos.map((individualTodo) => {
        return <IndividualTodo individualTodo={individualTodo} 
        key={individualTodo.id} deleteTodo={deleteTodo} />
    })
}
