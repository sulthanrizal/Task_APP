import { Box, Flex, Text } from "@chakra-ui/react";
import './calendarbar.scss'
import { useEffect, useState } from "react";
import moment from "moment";


const CalendarBar = () => {

    const [date, setDate] = useState([])
    const today = new Date();
    const listDay = () => {
        const array = []
        const firstDate = moment(today).format("YYYY-M-D")
        const endDate = moment(today).add('day', 7).format("YYYY-M-D");
        for (let TotalDay = firstDate; TotalDay < endDate; TotalDay = moment(TotalDay).add('day', 1).format('YYYY-M-D')) {
            array.push(TotalDay)
            setDate(array)
        }
    }
    console.log(date, ' data')

    useEffect(() => {
        listDay()
    }, [])


    return (
        <Box className="container-calendar">
            <Box className="calendar-title">Today</Box>
            <Flex className="container-date">
                {
                    date.map((tanggal,index) => {
                        return (
                            <Box className="list-date" key={index}>
                                <Box className="list-date-day">
                                    <Text>
                                     {moment(tanggal).format('ddd')}
                                    </Text>
                                </Box>
                                <Box className="list-date-tanggal">
                                    <Text>
                                     {moment(tanggal).format('D')}
                                    </Text>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Flex>
        </Box>
    )
}
export default CalendarBar;