import CalendarBar from "@page/calendarBar";
import TodosList from "@page/todosList";

const { Box } = require("@chakra-ui/react")

const TodoBox = () => {
    return (
        <Box className="container-todobox">
            <Box className="header-todobox">
                <CalendarBar />
            </Box>
            <Box className="body-todobox">
                {/* <TodosList /> */}
            </Box>
        </Box>
    )
}
export default TodoBox;