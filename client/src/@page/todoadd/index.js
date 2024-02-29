import { onClickNav } from '@components/helperOnClick'
import'./todoadd.scss'
import { useNavigate } from 'react-router-dom'
import { createTodos } from '@page/todosList/helpers/crud'
import { useState } from 'react'
import AxiosInstance from '@service/axios'

const { Box, Flex, Text, FormControl } = require("@chakra-ui/react")


const TodoAdd =()=>{
    const navigate=useNavigate()
    const [add,setAdd]= useState({title:'',completed:false})

    return(
        <Box className="container-todoadd">
            <Flex className="header-todoadd">
                <Flex className='row-header-todoadd'>
                     <span>⭐ ini bintang</span>
                     <Box  onClick={()=>{onClickNav({path:'/todobox',navigate})}} className='back-todoadd'>X</Box>
                </Flex>
                <Flex className='col-header-todoadd'>
                    <Text className='col-head-todoadd-text'>New Task</Text>
                    <Text className='col-foot-todoadd-add'>Click to change the emoji</Text>
                </Flex>
            </Flex>
            <Flex className='body-todoadd'>
                <Box className='input-todoadd'>
                    <input placeholder='Name your new task' type='text' name='title' required onChange={(e) => setAdd({ ...add, title: e.target.value })}/>
                </Box>
                {/* <Box className='input-todoadd'>
                    Done or Not
                    <input placeholder='Describe it' type='checkbox' required onChange={(e) => setAdd({ ...add, name: e.target.value })}/>
                </Box> */}
                <button onClick={()=> createTodos({data: add, navigate})} >submit</button>
            </Flex>
            <Flex className='body-list-color-todoadd'>
                <span>Card Color</span>
                <Flex className='list-color-todoadd'>
                    <Box className='list-color-lightgreen'></Box>
                    <Box className='list-color-purple'></Box>
                    <Box className='list-color-crem'></Box>
                    <Box className='list-color-lightblue'></Box>
                    <Box className='list-color-red'></Box>
                    <Box className='list-color-mossgreen'></Box>
                    <Box className='list-color-lightpurple'></Box>
                    <Box className='list-color-pink'></Box>
                </Flex>
            </Flex>
            <Flex className='body-repeat-todoadd'>
                <span>Repeat</span>
                <Flex>
                    <Box>
                        <Text>Set a cycle for your task</Text>
                    </Box>
                    <Flex>
                        <Text>Daily</Text>
                        <Text>Weekly</Text>
                        <Text>Monthly</Text>
                    </Flex>
                    <Flex>
                        <Text>Mon</Text>
                        <Text>Tue</Text>
                        <Text>Wed</Text>
                        <Text>Thu</Text>
                        <Text>Fri</Text>
                        <Text>Sat</Text>
                        <Text>Sun</Text>
                    </Flex>
                    <Flex>
                        <Text>Respeat
                            <Text>Every week
                                {/* <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.316 0.67H1.926L5.314 3.876L1.926 7.096H0.316L3.704 3.876L0.316 0.67Z" fill="#1E1C1C" fill-opacity="0.8"/>
                                </svg> */}
                            </Text>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
      
    )
}
export default TodoAdd;

// position: absolute;
// width: 197px;
// height: 60px;
// left: 116px;
// top: 776px;

// filter: drop-shadow(0px 6px 20px rgba(0, 0, 0, 0.3));
