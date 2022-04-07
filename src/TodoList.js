import React from 'react'
import Todo from './Todo'

export default function TodoList({ thingsToDo, toggleTodo }) {
  return (
    thingsToDo.map( todo=> {
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
