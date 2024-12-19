import { TodoListItem } from "./TodoListItem"

export function TodoList({ listOfTodos }) {
    return (
        <ul>
            {
                listOfTodos?.map((todo) => {
                    return <TodoListItem key={todo.id} todo={todo} />
                })            
            }
        </ul>
    )
}