import CalendarBar from "@page/calendarBar";
import TodosList from "@page/todoList";
import moment from "moment";
import { useState } from "react";
import './todobox.scss'
import ImgCalender from "@page/login/imgSvg/imgCalendar";
import ImgListCheck from "@page/login/imgSvg/imgListCheck";
import ImgUser from "@page/login/imgSvg/imgUser";
import { onClickNav } from "@components/helperOnClick";
import { useNavigate } from "react-router-dom";

const { Box } = require("@chakra-ui/react")


const TodoBox = () => {
    const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYY-MM-DD'))

    return (
        <Box className="container-todobox">
            <Box className="header-todobox">
                <CalendarBar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
            </Box>
            <Box className="body-todobox">
                <TodosList setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
            </Box>
            <Box className='footer-todobox'>
                <Box className='btn-footer-todobox-top'>
                    <button onClick={() => { onClickNav({ path: '/todoadd', navigate }) }}>Add</button>
                </Box>
                <Box className='btn-footer-todobox-bottom'>
                    <Box className='btn-img-todobox'>
                        <ImgCalender />
                    </Box>
                    <Box className='btn-img-todobox'>
                        <ImgListCheck />
                    </Box>
                    <Box className='btn-img-todobox' onClick={() => { onClickNav({ path: '/profile', navigate }) }}>
                        <ImgUser />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default TodoBox;