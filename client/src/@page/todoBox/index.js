import CalendarBar from "@page/calendarBar";
import TodosList from "@page/todosList";
import moment from "moment";
import { useState } from "react";
import './todobox.scss'

const { Box } = require("@chakra-ui/react")


const TodoBox = () => {
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    return (
        <Box className="container-todobox">
            <Box className="header-todobox">
                <CalendarBar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
            </Box>
            <Box className="body-todobox">
                <TodosList setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
            </Box>
        </Box>
    )
}
export default TodoBox;