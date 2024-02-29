import { Box, Button, Flex } from "@chakra-ui/react"
import {  readTodos } from "./helpers/crud";
import { useEffect, useState } from "react";
import TodoItem from "@page/todoItem";
import './todolist.scss'
import { onClickNav } from "@components/helperOnClick";
import { useNavigate } from "react-router-dom";

const TodosList = () => {
    const navigate = useNavigate()
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        readTodos({ setTodos })
    }, [])

    return (
        <Box className="container-todolist">
            <Flex className="header-todolist">

            </Flex>
            {
                todos.map((todo,index) => {
                    return (
                        <TodoItem key={index} todo={todo} />
                    )
                })
            }

            <Box className="footer-todolist">
                <Button className="btn-footer-todolist" onClick={()=>{onClickNav({path:'/todoadd',navigate})}}>+</Button>
            </Box>
        </Box>
    )
}
export default TodosList;