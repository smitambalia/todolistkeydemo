import { TodoListItem } from "./TodoListItem"

export function TodoList({ listOfTodos , onDeleteTodo }) {
    function deleteTodo (id) {
        console.log('delete todo with id', id);
        onDeleteTodo?.(id);
    }
    return (
        <ul>
            {
                listOfTodos?.map((todo) => {
                    return <TodoListItem key={todo.id} todo={todo} onDelete={deleteTodo}/>
                })            
            }
        </ul>
    )
}