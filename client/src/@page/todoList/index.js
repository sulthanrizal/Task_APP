import { Box, Button, Flex, background } from "@chakra-ui/react"
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
        // readTodos()
    }, [])

    return (
        <Box className="container-todolist">
            <Flex className="header-todolist">
                list
            </Flex>
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
            <Box className="footer-todolist">
                <Button className="btn-footer-todolist" onClick={() => { onClickNav({ path: '/todoadd', navigate }) }}>+</Button>
            </Box>
        </Box>
    )
}
export default TodosList;