import { useState } from 'react'
import './todoitem.scss'
import { deleteTodos, readTodos } from '@page/helpers/crud'
import TodoAdd from '@page/todoadd'
import { onClickNav } from '@components/helperOnClick'
import { useNavigate } from 'react-router-dom'
import router from '@router'
const { Box, Flex } = require("@chakra-ui/react")


const TodoItem = ({ todo, setTodos }) => {
    const navigate = useNavigate()
    const id = todo._uuid

    // const BtnEdit = () => {
    //     onClickNav({ path: '/todoadd', navigate })
    //     TodoAdd({ edit, setEdit })
    // }

    return (
        <Flex className="container-todoitem" style={{ backgroundColor: todo.backgroundColor }}  >
            <Box className="flex-todoitem"
                onClick={() => {
                    onClickNav({ path: `/todoedit/:${id}`, navigate });
                }}
            >
                {todo.title}
            </Box>
            <Box className="row-todoitem">
                <span onClick={() => { deleteTodos({ data: todo, refechTodos: () => { readTodos({ setTodos }) } }) }}>X</span>
            </Box>
        </Flex >
    )
}
export default TodoItem;