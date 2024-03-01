import { useState } from 'react'
import './todoitem.scss'
import { deleteTodos, readTodos } from '@page/helpers/crud'
const { Box, Flex } = require("@chakra-ui/react")


const TodoItem = ({ todo, setTodos }) => {
    const [edit, setEdit] = useState(false)

    return (
        <Flex className="container-todoitem" style={{ backgroundColor: todo.backgroundColor }}>
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