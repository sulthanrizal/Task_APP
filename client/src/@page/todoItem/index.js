const { Box } = require("@chakra-ui/react")


const TodoItem = ({ todo }) => {
    return (
        <Box className="comtainer-todoitem">
            {todo.title}
        </Box>
    )
}
export default TodoItem;