import { Box, Button, Flex, Text, background } from "@chakra-ui/react"
import { readTodos } from "../helpers/crud";
import { useEffect, useState } from "react";
import TodoItem from "@page/todoItem";
import './todolist.scss'
import { onClickNav } from "@components/helperOnClick";
import { useNavigate } from "react-router-dom";

const TodosList = ({ selectedDate }) => {
    const navigate = useNavigate()
    const [todos, setTodos] = useState([])

    useEffect(() => {
        readTodos({ setTodos })
    }, [])

    return (
        <Box className="container-todolist">
            <Box className="header-todolist">
                <Text>YOUR TASK TODAY</Text>
            </Box>
            {/* {console.log(todos, 'ini todo')} */}
            {
                todos.map((todo, index) => {
                    return (
                        todo.date == selectedDate
                            ?
                            <TodoItem key={index} todo={todo} setTodos={setTodos} />
                            : ''
                    )
                })

            }
        </Box>
    )
}
export default TodosList;