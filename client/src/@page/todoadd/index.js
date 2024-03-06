import { onClickNav } from '@components/helperOnClick'
import './todoadd.scss'
import { useNavigate } from 'react-router-dom'
import { createTodos } from '@page/helpers/crud'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import ImgCalender from '@page/login/imgSvg/imgCalendar'
import ImgListCheck from '@page/login/imgSvg/imgListCheck'
import ImgUser from '@page/login/imgSvg/imgUser'
const { Box, Flex, Text } = require("@chakra-ui/react")


const TodoAdd = () => {
    const navigate = useNavigate()
    const [add, setAdd] = useState({ title: '', completed: false, backgroundColor: null, type: "" })
    const toast = useToast()
    return (
        <Box className="container-todoadd">
            <Flex className="header-todoadd">
                <Flex className='row-header-todoadd'>
                    <span>⭐ ini bintang</span>
                    <Box onClick={() => { onClickNav({ path: '/todobox', navigate }) }} className='back-todoadd'>X</Box>
                </Flex>
                <Flex className='col-header-todoadd'>
                    <Text className='col-head-todoadd-text'>New Task</Text>
                    <Text className='col-foot-todoadd-add'>Click to change the emoji</Text>
                </Flex>
            </Flex>
            <Flex className='body-todoadd'>
                <Box className='input-todoadd'>
                    <input placeholder='Name your new task' type='text' name='title' required onChange={(e) => setAdd({ ...add, title: e.target.value })} />
                </Box>
                {
                    console.log(add, 'ini data')
                }
            </Flex>
            <Flex className='body-list-color-todoadd'>
                <span>Card Color</span>
                <Flex className='list-color-todoadd'>
                    <Box onClick={() => { setAdd({ ...add, backgroundColor: "#ADF7B6" }) }} className='list-color-lightgreen'></Box>
                    <Box onClick={() => { setAdd({ ...add, backgroundColor: "#A817C0" }) }} className='list-color-purple'></Box>
                    <Box onClick={() => { setAdd({ ...add, backgroundColor: "#FFC09F" }) }} className='list-color-crem'></Box>
                    <Box onClick={() => { setAdd({ ...add, backgroundColor: "#8FFFF8" }) }} className='list-color-lightblue'></Box>
                    <Box onClick={() => { setAdd({ ...add, backgroundColor: "#CC2222" }) }} className='list-color-red'></Box>
                    <Box onClick={() => { setAdd({ ...add, backgroundColor: "#FBF1BA" }) }} className='list-color-mossgreen'></Box>
                    <Box onClick={() => { setAdd({ ...add, backgroundColor: "#7075E5" }) }} className='list-color-lightpurple'></Box>
                    <Box onClick={() => { setAdd({ ...add, backgroundColor: "#FF36F7" }) }} className='list-color-pink'></Box>
                </Flex>
            </Flex>
            <Box className='body-reapet-todoadd'>
                <Calendar onChange={(value) => {
                    setAdd(
                        { ...add, date: moment(value).format('YYYY-MM-DD') }
                    )
                }} />

            </Box>
            <Box className='footer-todoadd'>
                <Box className='btn-footer-todoadd-top'>
                    <button onClick={() => createTodos({ data: add, navigate, toast })} >Add</button>
                </Box>
                <Box className='btn-footer-todoadd-bottom'>
                    <Box className='btn-img-todoadd'>
                        <ImgCalender />
                    </Box>
                    <Box className='btn-img-todoadd'>
                        <ImgListCheck />
                    </Box>
                    <Box className='btn-img-todoadd'>
                        <ImgUser onClick />
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}
export default TodoAdd;
