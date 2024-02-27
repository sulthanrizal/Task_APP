import { Box } from "@chakra-ui/react"
import { readTodos } from "./helpers/crud";
import { useEffect, useState } from "react";
import TodoItem from "@page/todoItem";

const TodosList = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        readTodos({ setTodos })
    }, [])

    return (
        <Box className="container-todolist">
            {
                todos.map((todo) => {
                    return (
                        <Box className="header-todolist">
                            <TodoItem todo={todo} />
                        </Box>
                    )
                })
            }
        </Box>
    )
}
export default TodosList;