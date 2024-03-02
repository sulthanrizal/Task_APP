import { useState } from 'react'
import './todoitem.scss'
import { deleteTodos, readTodos } from '@page/helpers/crud'
import TodoAdd from '@page/todoadd'
import { onClickNav } from '@components/helperOnClick'
import { useNavigate } from 'react-router-dom'
const { Box, Flex } = require("@chakra-ui/react")


const TodoItem = ({ todo, setTodos }) => {
    const navigate = useNavigate()

    return (
        <Flex className="container-todoitem"
            style={{ backgroundColor: todo.backgroundColor }}
            onClick={() => { onClickNav({ path: '/todoadd', navigate }) }}
        >
            <Box className="flex-todoitem">
                {todo.title}
            </Box>
            <Box className="row-todoitem">
                <span onClick={() => { deleteTodos({ data: todo, refechTodos: () => { readTodos({ setTodos }) } }) }}>X</span>
            </Box>
        </Flex >
    )
}
export default TodoItem;